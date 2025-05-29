const CountryMetric = require('../models/CountryMetric');
const FinalScore = require('../models/FinalScore');
const logger = require('../../bin/helper/logger');

const COUNTRY_DATA = {
    'ID': {
        name: 'Indonesia',
        flag: 'https://flagcdn.com/id.svg',
        baseVolume: 1200000,
        basePrice: 850000,
        defaultScore: 75,
        defaultRisk: 'LOW_MEDIUM_RISK'
    },
    'US': {
        name: 'United States',
        flag: 'https://flagcdn.com/us.svg',
        baseVolume: 1500000,
        basePrice: 1300000,
        defaultScore: 85,
        defaultRisk: 'LOW_RISK'
    }
};

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(value);
}

function mapRiskToSentiment(risk) {
    switch(risk) {
        case 'LOW_RISK':
        case 'LOW_MEDIUM_RISK':
            return 'Bullish';
        case 'MEDIUM_RISK':
            return 'Neutral';
        case 'MEDIUM_HIGH_RISK':
        case 'HIGH_RISK':
            return 'Bearish';
        default:
            return 'Neutral';
    }
}

async function calculateMetricsForCountry(finalScore, countryCode) {
    try {
        if (!COUNTRY_DATA[countryCode]) {
            throw new Error(`Country ${countryCode} not found in COUNTRY_DATA`);
        }

        const countryInfo = COUNTRY_DATA[countryCode];
        
        // Use final score if available, otherwise use default values
        const countryScore = finalScore?.final_score ? 
            Math.round(finalScore.final_score * 20) : 
            countryInfo.defaultScore;
            
        const trend = finalScore?.short_term_score && finalScore?.long_term_score ? 
            (finalScore.short_term_score >= finalScore.long_term_score ? 'up' : 'down') : 
            'neutral';
        const changePercent = ((finalScore.short_term_score - finalScore.long_term_score) / finalScore.long_term_score * 100).toFixed(1);

        // Calculate dynamic values based on score
        const volumeMultiplier = countryScore / 1000;
        const volume24h = Math.round(countryInfo.baseVolume * volumeMultiplier);
        const indexPrice = Math.round(countryInfo.basePrice * volumeMultiplier);

        return {
            code: countryCode,
            name: countryInfo.name,
            flag: countryInfo.flag,
            countryScore,
            volume24h: formatCurrency(volume24h),
            indexPrice: formatCurrency(indexPrice),
            sentiment: mapRiskToSentiment(finalScore.risk_assessment.overall_risk),
            changePercent: parseFloat(changePercent),
            trend,
            markPrice: formatCurrency(Math.round(countryScore * 500)),
            fundingRate: "0.01%",
            openInterest: formatCurrency(4200000),
            openTrades: 90000,
            volumes: formatCurrency(220000),
            fundingCooldown: "00:35:10",
            fundingPercent: "0.0100%",
            liquidationPrice: "4.87M"
        };
    } catch (error) {
        logger.log('country-metric-service', `Error calculating metrics for country ${countryCode}: ${error.message}`, 'error');
        throw error;
    }
}

async function getLatestMetrics() {
    try {
        const latestScore = await FinalScore.findOne().sort({ timestamp: -1 });
        
        if (!latestScore) {
            throw new Error('No final score available');
        }

        // Generate metrics for ID and US first
        const priorityCountries = ['ID', 'US'];
        const priorityMetrics = await Promise.all(
            priorityCountries.map(async countryCode => {
                try {
                    return await calculateMetricsForCountry(latestScore, countryCode);
                } catch (error) {
                    logger.log('country-metric-service', `Error calculating metrics for ${countryCode}: ${error.message}`, 'error');
                    return null;
                }
            })
        );

        // Filter out any null values from failed calculations
        const metrics = priorityMetrics.filter(metric => metric !== null);
        
        logger.log('country-metric-service', `Generated metrics for ${metrics.length} priority countries (ID, US)`, 'info');
        return metrics;
    } catch (error) {
        logger.log('country-metric-service', `Error getting latest metrics: ${error.message}`, 'error');
        throw error;
    }
}

async function getCountryMetrics(countryCode) {
    try {
        if (!COUNTRY_DATA[countryCode]) {
            throw new Error(`Country ${countryCode} not supported`);
        }

        const latestScore = await FinalScore.findOne().sort({ timestamp: -1 });
        if (!latestScore) {
            throw new Error('No final score available');
        }

        return await calculateMetricsForCountry(latestScore, countryCode);
    } catch (error) {
        logger.log('country-metric-service', `Error getting metrics for country ${countryCode}: ${error.message}`, 'error');
        throw error;
    }
}

async function generateAndSaveMetrics() {
    try {
        const metrics = await getLatestMetrics();
        logger.log('country-metric-service', `Generated metrics for ${metrics.length} countries`, 'success');
        return metrics;
    } catch (error) {
        logger.log('country-metric-service', `Error generating metrics: ${error.message}`, 'error');
        throw error;
    }
}

module.exports = {
    getLatestMetrics,
    getCountryMetrics,
    generateAndSaveMetrics
};
