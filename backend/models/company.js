const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName: String,
    idService : { type: mongoose.Schema.ObjectId, ref: "Service"}
});

module.exports = mongoose.model("Company", companySchema);