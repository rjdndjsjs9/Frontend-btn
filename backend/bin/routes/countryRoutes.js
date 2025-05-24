const express = require("express");
const router = express.Router();
const countryController = require("../../module/controllers/countryController");

// GET /api/country/:code
router.get("/country/:code", countryController.getCountryByCode);

// GET /api/country
router.get("/country", countryController.getAllCountries);

module.exports = router;
