const Country = require("../models/Country");
const global_config = require("../../bin/helper/global_config");
const axios = require("axios");
const logger = require('../../bin/helper/logger');
const ctx = 'country-service';

async function getCountry() {

  return null;
}

async function bulkInsert() {
  return null;
}

module.exports = {
  getCountry,
  bulkInsert
};