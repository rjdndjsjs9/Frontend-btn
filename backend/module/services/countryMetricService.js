const CountryMetric = require('../models/CountryMetric');
const FinalScore = require('../models/FinalScore');
const Country = require('../models/Country');
const logger = require('../../bin/helper/logger');
const ctx = 'country-metric-service';

async function generateMockMetrics() {
    try {
        // Get latest final score
        const latestScore = await FinalScore.findOne().sort({ timestamp: -1 });
        const countries = await Country.find({});

        if (!latestScore) {
            throw new Error('No final score available');
        }

        const metrics = countries.map(country => ({
            countryCode: country.code,
            timestamp: new Date(),
            countryScore: latestScore.final_score, // Menggunakan final score yang sudah ada
            riskLevel: latestScore.risk_assessment.overall_risk,
            trend: ['IMPROVING', 'STABLE', 'DECLINING'][Math.floor(Math.random() * 3)],
            // Mock data untuk metrics lainnya
            volume24h: Math.floor(Math.random() * 1000000),
            marketCap: Math.floor(Math.random() * 1000000000)
        }));

        // Hapus metrics lama dan insert yang baru
        await CountryMetric.deleteMany({});
        const result = await CountryMetric.insertMany(metrics);
        
        logger.log(ctx, `Generated mock metrics for ${result.length} countries`, 'generateMockMetrics');
        return result;
    } catch (error) {
        logger.log(ctx, `Error generating mock metrics: ${error.message}`, 'generateMockMetrics-error');
        throw error;
    }
}

async function getLatestMetricsForAllCountries() {
    try {
        // Check if we have any metrics
        const metricsCount = await CountryMetric.countDocuments();
        
        // If no metrics exist, generate them first
        if (metricsCount === 0) {
            await generateMockMetrics();
        }

        const metrics = await CountryMetric.aggregate([
            // Sort by timestamp descending to get latest first
            { $sort: { timestamp: -1 } },
            
            // Group by countryCode and get the first (latest) document
            {
                $group: {
                    _id: "$countryCode",
                    latestMetric: { $first: "$$ROOT" }
                }
            },
            
            // Lookup country details
            {
                $lookup: {
                    from: "countries",
                    localField: "_id",
                    foreignField: "code",
                    as: "countryDetails"
                }
            },
            
            // Unwind country details array
            { $unwind: "$countryDetails" },
            
            // Project final structure
            {
                $project: {
                    _id: 0,
                    code: "$_id",
                    name: "$countryDetails.name",
                    flag: "$countryDetails.flagCode",
                    region: "$countryDetails.description",
                    metrics: {
                        score: "$latestMetric.countryScore",
                        riskLevel: "$latestMetric.riskLevel",
                        trend: "$latestMetric.trend",
                        volume24h: "$latestMetric.volume24h",
                        marketCap: "$latestMetric.marketCap",
                        timestamp: "$latestMetric.timestamp"
                    }
                }
            }
        ]);

        logger.log(ctx, `Retrieved latest metrics for ${metrics.length} countries`, 'getLatestMetricsForAllCountries');
        return metrics;
    } catch (error) {
        logger.log(ctx, `Error getting latest metrics: ${error.message}`, 'getLatestMetricsForAllCountries-error');
        throw error;
    }
}

// Scheduler untuk update metrics setiap 5 menit
setInterval(async () => {
    try {
        await generateMockMetrics();
        logger.log(ctx, 'Updated mock metrics', 'metrics-scheduler');
    } catch (error) {
        logger.log(ctx, `Error in metrics scheduler: ${error.message}`, 'metrics-scheduler-error');
    }
}, 5 * 60 * 1000);

module.exports = {
    getLatestMetricsForAllCountries,
    generateMockMetrics
};
