const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    serviceName: String,
    idIndicator: { type: Schema.ObjectId, ref: 'Indicator' }
});

module.exports = mongoose.model("Service", serviceSchema);





