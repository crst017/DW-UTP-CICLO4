const mongoose = require("mongoose");

const indicatorSchema = new mongoose.Schema({
    indicatorName: String
});

const indicator = mongoose.model("indicator", indicatorSchema);
module.exports = indicator;