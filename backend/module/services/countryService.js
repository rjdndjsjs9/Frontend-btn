const Country = require("../models/Country");
const axios = require("axios");

async function getCountryByCode(code) {
  let country = await Country.findOne({ code: code.toUpperCase() });
  if (!country) {
    // Fetch and cache if not found
    const countries = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,cca2,cca3,region');
    const bulk = countries.data.map(c => ({
      code: c.cca2 || c.cca3,
      name: c.name?.common,
      flagCode: c.flags?.svg,
      description: c.region
    }));
    for (const c of bulk) {
      await Country.updateOne({ code: c.code }, c, { upsert: true });
    }
    country = await Country.findOne({ code: code.toUpperCase() });
  }
  return country ? {
    name: country.name,
    flag: country.flagCode,
    code: country.code,
    region: country.description
  } : null;
}

async function getAllCountries() {
  let countries = await Country.find({});
  if (!countries || countries.length === 0) {
    // Fetch and cache if not found
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,cca2,cca3,region');
    const bulk = response.data.map(c => ({
      code: c.cca2 || c.cca3,
      name: c.name?.common,
      flagCode: c.flags?.svg,
      description: c.region
    }));
    for (const c of bulk) {
      await Country.updateOne({ code: c.code }, c, { upsert: true });
    }
    countries = await Country.find({});
  }
  return countries.map(country => ({
    name: country.name,
    flag: country.flagCode,
    code: country.code,
    region: country.description
  }));
}

module.exports = {
  getCountryByCode,
  getAllCountries
};