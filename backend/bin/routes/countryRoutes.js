const express = require("express");
const router = express.Router();
const countryController = require("../../module/controllers/countryController");

// GET /api/country/:code
router.get("/country/:code", countryController.getCountryByCode);

// GET /api/country
router.get("/country", countryController.getAllCountries);

// GET /api/countries - Get all countries with latest metrics
router.get("/countries", countryController.getAllCountriesWithMetrics);

// POST /api/countries/generate-metrics - Generate initial mock metrics
router.post("/countries/generate-metrics", countryController.generateInitialMetrics);

module.exports = router;
