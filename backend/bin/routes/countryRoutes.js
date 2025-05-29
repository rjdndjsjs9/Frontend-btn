const express = require("express");
const router = express.Router();
const countryController = require("../../module/controllers/countryController");

const countryMetricController = require("../../module/controllers/countryMetricController");

// Country base routes
router.get("/country/:code", countryController.getCountryByCode);
router.get("/country", countryController.getAllCountries);

// GET /api/countries - Get all countries with latest metrics
router.get("/countries", countryController.getAllCountriesWithMetrics);

// POST /api/countries/generate-metrics - Generate initial mock metrics
router.post("/countries/generate-metrics", countryController.generateInitialMetrics);

module.exports = router;
