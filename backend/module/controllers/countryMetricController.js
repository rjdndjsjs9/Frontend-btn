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

async function getCountryCard(req, res) {
    try {
        const { countryCode } = req.params;
        
        if (!countryCode) {
            return res.status(400).json({
                status: false,
                message: "Country code is required"
            });
        }

        const metrics = await countryMetricService.getCountryCardMetrics(countryCode);
        
        if (!metrics) {
            return res.status(404).json({
                status: false,
                message: `No metrics found for country ${countryCode}`
            });
        }

        return res.status(200).json({
            status: true,
            message: "Country card metrics retrieved successfully",
            data: metrics,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        logger.log('country-metric-controller', error.message, 'error');
        return res.status(500).json({
            status: false,
            message: "Error retrieving country card metrics",
            error: error.message
        });
    }
}

async function getTradeDetail(req, res) {
    try {
        const { countryCode } = req.params;
        
        if (!countryCode) {
            return res.status(400).json({
                status: false,
                message: "Country code is required"
            });
        }

        const metrics = await countryMetricService.getTradeDetailMetrics(countryCode);
        
        if (!metrics) {
            return res.status(404).json({
                status: false,
                message: `No metrics found for country ${countryCode}`
            });
        }

        return res.status(200).json({
            status: true,
            message: "Trade detail metrics retrieved successfully",
            data: metrics,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        logger.log('country-metric-controller', error.message, 'error');
        return res.status(500).json({
            status: false,
            message: "Error retrieving trade detail metrics",
            error: error.message
        });
    }
}

async function getAllCardMetrics(req, res) {
    try {
        const metrics = await countryMetricService.getAllCardMetrics();
        if (!metrics || metrics.length === 0) {
            return res.status(404).json({
                status: false,
                message: "No card metrics found",
                data: []
            });
        }
        
        return res.status(200).json({
            status: true,
            message: "Country card metrics retrieved successfully",
            data: metrics,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        logger.log('country-metric-controller', `Error getting card metrics: ${error.message}`, 'error');
        return res.status(500).json({
            status: false,
            message: "Error retrieving card metrics",
            error: error.message
        });
    }
}

async function getAllTradeMetrics(req, res) {
    try {
        const metrics = await countryMetricService.getAllTradeMetrics();
        if (!metrics || metrics.length === 0) {
            return res.status(404).json({
                status: false,
                message: "No trade metrics found",
                data: []
            });
        }
        
        return res.status(200).json({
            status: true,
            message: "Country trade metrics retrieved successfully",
            data: metrics,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        logger.log('country-metric-controller', `Error getting trade metrics: ${error.message}`, 'error');
        return res.status(500).json({
            status: false,
            message: "Error retrieving trade metrics",
            error: error.message
        });
    }
}

module.exports = {
    getLatestMetrics,
    getCountryMetrics,
    generateMetrics,
    getCountryCard,
    getTradeDetail,
    getAllCardMetrics,
    getAllTradeMetrics
};