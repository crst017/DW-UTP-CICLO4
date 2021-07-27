const mongoose = require("mongoose");

const indicatorSchema = new mongoose.Schema({
    indicatorName: String
});

const Indicator = mongoose.model("Indicator", indicatorSchema);
module.exports = Indicator;