var mongoose = require("mongoose");
var indicator = mongoose.model('indicator');

var serviceSchema = new mongoose.Schema({
    serviceName: String,
    idIndicator: { type: Schema.ObjectId, ref: 'indicator' }
});

module.exports = mongoose.model("service", serviceSchema);





