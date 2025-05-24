const Country = require("../models/Country");
const axios = require("axios");
const logger = require('../../bin/helper/logger');
const ctx = 'country-controller';
const countryService = require("../services/countryService");

// Fetch and cache countries from restcountries.com
async function fetchAndCacheCountries() {
    try {
        const countries = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,cca2,cca3,region');
        const bulk = countries.data.map(c => ({
            code: c.cca2 || c.cca3,
            name: c.name?.common,
            flagCode: c.flags?.svg,
            description: c.region
        }));
        // Upsert each country
        for (const c of bulk) {
            await Country.updateOne({ code: c.code }, c, { upsert: true });
        }
        logger.log(ctx, 'Countries cached/updated', 'fetchAndCacheCountries');
    } catch (err) {
        logger.log(ctx, err.message, 'fetchAndCacheCountries-error');
        throw err;
    }
}

// GET /api/country/:code
async function getCountryByCode(req, res) {
    try {
        const code = req.params.code;
        const country = await countryService.getCountryByCode(code);
        if (!country) {
            return res.status(404).json({ message: "Country not found" });
        }
        res.json(country);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET /api/country
async function getAllCountries(req, res) {
    try {
        const countries = await countryService.getAllCountries();
        res.json(countries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getCountryByCode,
    fetchAndCacheCountries,
    getAllCountries
};
