const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    serviceName: String,
    idCompany: { type: mongoose.Schema.ObjectId, ref: 'Company' }
});

module.exports = mongoose.model("Service", serviceSchema);



