const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Indicator = require('../models/indicator');

router.post("/newIndicator", async(req, res) => {
    if (!req.body.indicatorName || !req.body.idService )
        return res.status(401).send("Process failed: Incomplete data")

    let indicatorExists = await Indicator.findOne({ $and: [ 
        { indicatorName: req.body.indicatorName},
        { idService: req.body.idService }
    ]});

    if (indicatorExists)
        return res.status(401).send("Process failed: Indicator already exists")

    const indicator = new Indicator({
        indicatorName: req.body.indicatorName,
        idService: req.body.idService
    })

    const result = await indicator.save();
    if (!result) 
        return res.status(401).json({message: "Process failed: Error registering indicator"})
    return res.status(200).send({indicator})
})

router.get('/getIndicators', async(req, res) => {
    const indicator = await Indicator.find()
    if (!indicator) 
        return res.status(401).json({message: "Process failed: Error fetching indicator information"});
    
  
    return res.status(200).send(indicator);
});


router.get('/getIndicator/:idService', async(req, res) => {
    const indicator = await Indicator.find({ $and: [
        {idService: req.params.idService},
        {status: true}
    ]});

    if (!indicator) 
        return res.status(401).send("Process failed: Error fetching indicator information");
    return res.status(200).send(indicator);
});

router.get('/getIndicatorId/:_id', async(req, res) => {
    
    const validId = mongoose.isValidObjectId(req.params._id);
    if (!validId) 
        return res.status(401).json({message: "Process failed: Invalid Id"});

    const indicator = await Indicator.findOne({ _id: req.params._id})
    if (!indicator) 
        return res.status(401).json({message: "Process failed: Error fetching company information"});
        
    return res.status(200).send(indicator );
})

router.put('/editIndicator', async(req, res) => {
    if (!req.body._id || 
        !req.body.indicatorName)
        return res.status(401).json({message: "Process failed: Incomplete data"})

    const validId = mongoose.isValidObjectId(req.body._id);
    if (!validId) 
        return res.status(401).json({message: "Process failed: Invalid Id"});
    
    const findIndicator = await Indicator.findById(req.body._id)
    if(!findIndicator)
        return res.status(401).json({message: "Process failed: Invalid indicator"})

    const indicator = await Indicator.findByIdAndUpdate(req.body._id, {
        indicatorName: req.body.indicatorName
    }, { new: true })
    if (!indicator) 
        return res.status(401).json({message: "Process failed: Error updating indicator"})
    return res.status(200).send({indicator})
})

router.put('/deleteIndicator/:_id?', async(req, res) => {

    const validId = mongoose.isValidObjectId(req.body._id);
    if (!validId) 
        return res.status(401).json({ message: "Process failed: Invalid Id"});

    const findIndicator = await Indicator.findById(req.params._id)
    if(!findIndicator)
        return res.status(401).json({message: "Process failed: Invalid indicator"})

        


    const indicator = await Indicator.findByIdAndUpdate(req.params._id, {
        status: false
    }, { new: true })
    if (!indicator) 
        return res.status(401).json({message: "Process failed: Error updating indicator"})

    return res.status(200).json({message: "Process successfull: Indicator deleted", indicator})
})

module.exports = router;