const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    idCompany : { type: mongoose.Schema.ObjectId , ref: "Company"},
    year: String,
    month: String,
    idService : { type: mongoose.Schema.ObjectId , ref: "Service"},
    idIndicator : { type: mongoose.Schema.ObjectId , ref: "Indicator"},
    compliance: Number,
    comments: String
});

module.exports = mongoose.model("Register", registerSchema);
