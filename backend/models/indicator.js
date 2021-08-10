const mongoose = require("mongoose");

const indicatorSchema = new mongoose.Schema({
    indicatorName: String,
    idService : { type: mongoose.Schema.ObjectId, ref: "Service"}
});

const Indicator = mongoose.model("Indicator", indicatorSchema);
module.exports = Indicator;