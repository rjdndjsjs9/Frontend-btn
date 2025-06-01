const express = require("express");
const router = express.Router();
const countryController = require("../../module/controllers/countryController");
const countryMetricController = require("../../module/controllers/countryMetricController");

// Country base routes
router.get("/v1/country/:code", countryController.getCountryByCode);
router.get("/v1/country", countryController.getAllCountries);

router.get("/v1/metrics/cards", countryMetricController.getAllCardMetrics);
router.get("/v1/country/:countryCode/trade", countryMetricController.getTradeDetail);

// POST /api/metrics/generate - Generate initial mock metrics
router.post("/v1/metrics/generate", countryMetricController.generateMetrics);

module.exports = router;
