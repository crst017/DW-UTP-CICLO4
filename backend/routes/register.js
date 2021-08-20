const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Register = require('../models/register');

router.post('/newRegister', async ( req, res) => {
    
    if (!req.body.idCompany ||
        !req.body.year ||
        !req.body.month ||
        !req.body.idService || 
        !req.body.idIndicator|| 
        !req.body.compliance)
        return res.status(401).send("Process failed: Incomplete data");

    const register = new Register({
        idCompany : req.body.idCompany,
        year : req.body.year, 
        month : req.body.month, 
        idService : req.body.idService, 
        idIndicator : req.body.idIndicator, 
        compliance : req.body.compliance,
        comments : req.body.comments
    });

    try {
        const result = await register.save();
        if (!result) return res.status(401).send("Process failed: Error creating the register")
        return res.status(200).json(result);
    } catch (error) {
        return res.status(401).send("Process failed: Error creating the register")
    }
});

router.get('/getRegisters', async(req, res) => {
    const registers = await Register.find();
    if (!registers) 
        return res.status(401).send("Process failed: Error fetching registers");
    return res.status(200).send( registers );
});


// Get all the registers of a company using its id
router.get('/getRegisters/:idCompany', async(req, res) => {
    const registers = await Register.find({ idCompany : req.params.idCompany})
        .populate(['idService','idIndicator'])
        .exec();
    if (!registers) 
        return res.status(401).send("Process failed: Error fetching registers for this company");
    return res.status(200).send( registers );
});


//Get register by its id
router.get('/getRegistersId/:_id', async(req, res) => {
    const validId = mongoose.isValidObjectId(req.body._id);

    if (!validId) 
        return res.status(401).send("Process failed: Invalid Id");
        const findRegister = await Register.findById(req.params._id)
        .populate(['idService','idIndicator'])
        .exec();


        if(!findRegister)
            return res.status(401).send("Process failed: Error fetching registers");
        return res.status(200).send( findRegister );
});

router.post('/registersFilter', async(req, res) => {

    if (!req.body.idCompany )
        return res.status(401).send("Process failed: Incomplete data");

    const filter = [];

    filter.push({idCompany: req.body.idCompany})
    if ( req.body.month ) filter.push({month:req.body.month});
    if ( req.body.year ) filter.push({year:req.body.year});
    if ( req.body.idIndicator ) filter.push({idIndicator: req.body.idIndicator});
    if ( req.body.idService ) filter.push({idService: req.body.idService});
    
    const registers = await Register.find({ $and: filter});

    if (!registers) 
        return res.status(401).send("Process failed: Error fetching registers");
    return res.status(200).send( registers );
});




router.put('/editRegister', async(req, res) => {
    console.log(req.body)

    if (!req.body._id ||
        !req.body.idCompany ||
        !req.body.year ||
        !req.body.month ||
        !req.body.idService || 
        !req.body.idIndicator|| 
        !req.body.compliance
        
        )
        return res.status(404).send("Process failed: Incomplete data");

    const validId = mongoose.isValidObjectId(req.body._id);
    if (!validId) 
        return res.status(404).send("Process failed: Invalid Id");
    
    const findRegister = Register.findById(req.body._id)
    if(!findRegister)
        return res.status(404).send("Process failed: Invalid register")


    const register = await Register.findByIdAndUpdate(req.body._id, {
        idCompany : req.body.idCompany,
        year : req.body.year, 
        month : req.body.month, 
        idService : req.body.idService, 
        idIndicator : req.body.idIndicator, 
        compliance : req.body.compliance,
        comments: req.body.comments
    }, { new: true })
    if (!register) 
        return res.status(404).send("Process failed: Error updating register")
    return res.status(200).send(register)
});

router.delete('/deleteRegister/:_id', async(req, res) => {
    const validId = mongoose.isValidObjectId(req.body._id);

    if (!validId) 
        return res.status(401).send("Process failed: Invalid Id");

    const findRegister = await Register.findById(req.params._id);
    console.log(req.params._id)
    if(!findRegister)
        return res.status(401).send("Process failed: Invalid register")

    const register = await Register.findByIdAndDelete(req.params._id)
    if (!register)
        return res.status(401).send("Process failed: Error deleting register")
        
    return res.status(200).send({result: "Process successfull: Register deleted"})
})

module.exports = router;
