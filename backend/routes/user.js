const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require('../models/user');
const Auth = require('./auth')

router.post("/newUser", async(req, res) => {
    if (!req.body.fullName || 
        !req.body.email || 
        !req.body.userName || 
        !req.body.password ||
        !req.body.idCompany)
        return res.status(401).json({message: "Process failed: Incomplete data"})

    let userName = await User.findOne({userName: req.body.userName})
    if (userName)
        return res.status(401).json({message: "Process failed: Username already exists"})

    let email = await User.findOne({email: req.body.email})
    if (email)
        return res.status(401).json({message: "Process failed: Email already exists"})

    const hash = await bcrypt.hash(req.body.password, 10);
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        userName: req.body.userName,
        password: hash,
        idCompany: req.body.idCompany
    })

    try {
        const result = await user.save();
        if (!result) 
            return res.status(401).json({message: "Process failed: Error registering user"})
        const jwtToken = user.generateJWT();
        return res.status(200).send(jwtToken)
    } catch (error) {
        return res.status(401).json({message: "Process failed: Error registering user"})
    }
})

router.get('/getUsers', async(req, res) => {
    const user = await User.find();
    if (!user) 
        return res.status(401).json({message: "Process failed: Error fetching users"});
    return res.status(200).send({ user });
})

router.put('/editUser', async(req, res) => {
    if (!req.body._id || 
        !req.body.fullName || 
        !req.body.email || 
        !req.body.userName || 
        !req.body.password || 
        !req.body.idCompany)
        return res.status(401).json({message: "Process failed: Incomplete data"})

    const validId = mongoose.isValidObjectId(req.body._id);
    if (!validId) 
        return res.status(401).json({message: "Process failed: Invalid Id"});
    
    const findUser = User.findById(req.body._id)
    if(!findUser)
        return res.status(401).json({message: "Process failed: Invalid user"})
    
    if (findUser.email !== req.body.email) {
        const findEmail = await User.findOne({ email: req.body.email });
        if (findEmail)
            return res.status(401).json({message: "Process failed: The email isn't available"});
    }

    const hash = await bcrypt.hash(req.body.password, 10);

    const user = await User.findByIdAndUpdate(req.body._id, {
        fullName: req.body.fullName,
        email: req.body.email,
        userName: req.body.userName,
        password: hash,
        idCompany: req.body.idCompany
    }, { new: true })
    if (!user) 
        return res.status(401).json({message: "Process failed: Error updating user"})
    return res.status(200).send({user})
})

router.delete('/deleteUser/:_id?', async(req, res) => {
    const validId = mongoose.isValidObjectId(req.body._id);
    if (!validId) 
        return res.status(401).json({message: "Process failed: Invalid Id"});
    const findUser = User.findById(req.params._id)
    if(!findUser)
        return res.status(401).json({message: "Process failed: Invalid user"})
    const user = User.findByIdAndDelete(req.params._id)
    if (!user)
        return res.status(401).json({message: "Process failed: Error deleting user"})
    return res.status(200).json({message: "Process successfull: User deleted"})
})

module.exports = router;