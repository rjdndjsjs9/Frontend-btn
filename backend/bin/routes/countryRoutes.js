const express = require("express");
const router = express.Router();
const countryController = require("../../module/controllers/countryController");
const countryMetricController = require("../../module/controllers/countryMetricController");

// Country base routes
router.get("/country/:code", countryController.getCountryByCode);
router.get("/country", countryController.getAllCountries);

// GET /api/metrics/latest - Get latest metrics
router.get("/metrics/latest", countryMetricController.getLatestMetrics);
router.get("/metrics/cards", countryMetricController.getAllCardMetrics);
router.get("/metrics/trades", countryMetricController.getAllTradeMetrics);

// Country-specific metrics routes
router.get("/country/:countryCode/metrics", countryMetricController.getCountryMetrics);
router.get("/country/:countryCode/card", countryMetricController.getCountryCard);
router.get("/country/:countryCode/trade", countryMetricController.getTradeDetail);

// POST /api/metrics/generate - Generate initial mock metrics
router.post("/metrics/generate", countryMetricController.generateMetrics);

module.exports = router;
