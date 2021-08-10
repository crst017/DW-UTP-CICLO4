const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    userName: String,
    password: String,
    idCompany: {type: mongoose.Schema.ObjectId, ref: 'Company'},
    role: {type: String, default: 'user'}
});

userSchema.methods.generateJWT = function() {
    return jwt.sign({
        _id: this._id,
        userName: this.userName,
        role: this.role,
        iat: moment().unix()
    }, process.env.JWT_TOKEN)
}

const User = mongoose.model("User", userSchema);
module.exports = User;