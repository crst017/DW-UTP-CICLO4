const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Company = require('../models/company');   // modelo de coleccion de compania

// Metodo post para añadir una nueva compañía
router.post("/newCompany", async(req, res) => {
    if (!req.body.companyName)
        return res.status(401).send("Process failed: Incomplete data")

    let companyName = await Company.findOne({companyName: req.body.companyName})
    if (companyName)
        return res.status(401).send("Process failed: Company already exists")

    const company = new Company({
        companyName: req.body.companyName
    })

    const result = await company.save();
    if (!result) 
        return res.status(401).send("Process failed: Error registering company")
    return res.status(200).send(company)
})

// Metodo get para obtener información de la compañia
router.get('/getCompany', async(req, res) => {
    const company = await Company.find()
    if (!company) 
        return res.status(401).json({message: "Process failed: Error fetching company information"});
    return res.status(200).send(company );
})

// Metodo put para editar información del nombre de la compañia
router.put('/editCompany', async(req, res) => {
    if (!req.body._id || 
        !req.body.companyName)
        return res.status(401).send("Process failed: Incomplete data")

    const validId = mongoose.isValidObjectId(req.body._id);
    if (!validId) 
        return res.status(401).send("Process failed: Invalid Id");
    
    const findCompany = await Company.findById(req.body._id)
    if(!findCompany)
        return res.status(401).send("Process failed: Invalid company")

    const company = await Company.findByIdAndUpdate(req.body._id, {
        companyName: req.body.companyName
    }, { new: true })
    if (!company) 
        return res.status(401).send("Process failed: Error updating company")
    return res.status(200).send(company)
})

// Metodo delete para borrar información de la compañia
router.delete('/deleteCompany/:_id?', async(req, res) => {
    const validId = mongoose.isValidObjectId(req.body._id);
    if (!validId) 
        return res.status(401).send("Process failed: Invalid Id");
    const findCompany = await Company.findById(req.params._id)
    if(!findCompany)
        return res.status(401).send("Process failed: Invalid company")
    const company = await Company.findByIdAndDelete(req.params._id)
    if (!company)
        return res.status(401).send("Process failed: Error deleting company")
    return res.status(200).send({result: "Process successfull: Company deleted"})
})

module.exports = router;