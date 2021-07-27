var mongoose = require("mongoose");
// var Company = mongoose.model('Company')
// var Service = mongoose.model('Service')

var companySchema = new mongoose.Schema({
    idCompany : { type: Schema.ObjectId, ref: "Company"},
    companyName: String,
    idService : { type: Schema.ObjectId, ref: "Service"}
});

module.exports = mongoose.model("Company", companySchema);