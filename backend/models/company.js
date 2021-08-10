const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName: String
});

module.exports = mongoose.model("Company", companySchema);