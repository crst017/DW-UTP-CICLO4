const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    // idCompany : { type: mongoose.Schema.ObjectId , ref: "Company"},
    idCompany: String,
    year: String,
    month: String,
    idService: String,
    idIndicator: String,
    // idService : { type: mongoose.Schema.ObjectId , ref: "Service"},
    // idIndicator : { type: mongoose.Schema.ObjectId , ref: "Indicator"},
    compliance: Number
});

module.exports = mongoose.model("Register", registerSchema);
