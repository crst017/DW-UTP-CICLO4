const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    idCompany: {type: mongoose.Schema.ObjectId, ref: 'company'}
});

userSchema.methods.generateJWT = function() {
    return jwt.sign({
        _id: this._id,
        userName: this.userName,
        iat: moment().unix()
    }, process.env.JWT_TOKEN)
}

const user = mongoose.model("user", userSchema);
module.exports = user;