const countryMetricService = require('../services/countryMetricService');
const logger = require('../../bin/helper/logger');

async function getLatestMetrics(req, res) {
    try {
        const metrics = await countryMetricService.getLatestMetrics();
        if (!metrics || metrics.length === 0) {
            return res.status(404).json({
                status: false,
                message: "No metrics found",
                data: []
            });
        }
        
        return res.status(200).json({
            status: true,
            message: "Country metrics retrieved successfully",
            data: metrics,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        logger.log('country-metric-controller', `Error getting metrics: ${error.message}`, 'error');
        return res.status(500).json({
            status: false,
            message: "Error retrieving metrics",
            error: error.message
        });
    }
}

async function getCountryMetrics(req, res) {
    try {
        const { countryCode } = req.params;
        
        if (!countryCode) {
            return res.status(400).json({
                status: false,
                message: "Country code is required"
            });
        }

        const metrics = await countryMetricService.getCountryMetrics(countryCode);
        
        if (!metrics || Object.keys(metrics).length === 0) {
            return res.status(404).json({
                status: false,
                message: `No metrics found for country ${countryCode}`,
                data: null
            });
        }

        return res.status(200).json({
            status: true,
            message: "Country metrics retrieved successfully",
            data: metrics,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        logger.log('country-metric-controller', `Error getting country metrics: ${error.message}`, 'error');
        return res.status(500).json({
            status: false,
            message: "Error retrieving country metrics",
            error: error.message
        });
    }
}

async function generateMetrics(req, res) {
    try {
        const metrics = await countryMetricService.generateAndSaveMetrics();
        res.json({
            status: true,
            message: "Metrics generated successfully",
            data: metrics,
            timestamp: new Date()
        });
    } catch (error) {
        logger.log('country-metric-controller', `Error generating metrics: ${error.message}`, 'error');
        res.status(500).json({
            status: false,
            message: "Error generating metrics",
            error: error.message
        });
    }
}

module.exports = {
    getLatestMetrics,
    getCountryMetrics,
    generateMetrics
};