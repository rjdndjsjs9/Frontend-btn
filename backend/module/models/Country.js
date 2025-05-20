const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
    code: { type: String, unique: true },
    name: { type: String },
    flagCode: { type: String, unique: true },
    description: { type: String },
});

module.exports = mongoose.model("Country", countrySchema);