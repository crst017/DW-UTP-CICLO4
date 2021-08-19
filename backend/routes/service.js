const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Service = require('../models/service');


router.post("/newService", async(req, res) => {
    if (!req.body.serviceName)
        return res.status(401).send("Process failed: Incomplete data")

    let serviceName = await Service.findOne({serviceName: req.body.serviceName})
    if (serviceName)
        return res.status(401).send("Process failed: Service already exists")

    const service = new Service({
        serviceName: req.body.serviceName,
        idCompany: req.body.idCompany
    })

    const result = await service.save();
    if (!result) 
        return res.status(401).send("Process failed: Error registering service")
    return res.status(200).send(service)
})

router.get('/getService', async(req, res) => {
    const service = await Service.find()
    if (!service) 
        return res.status(401).send("Process failed: Error fetching service information");
    return res.status(200).send(service);
})

router.get('/getServices/:idCompany', async(req, res) => {
    const services = await Service.find({ idCompany : req.params.idCompany});
    if (!services) 
        return res.status(401).send("Process failed: Error fetching services for this company");
    return res.status(200).send( services );
});


router.put('/editService', async(req, res) => {
    if (!req.body._id || 
        !req.body.serviceName)
        return res.status(401).send("Process failed: Incomplete data")

    const validId = mongoose.isValidObjectId(req.body._id);
    if (!validId) 
        return res.status(401).send("Process failed: Invalid Id");
    
    const findService = await Service.findById(req.body._id)
    if(!findService)
        return res.status(401).send("Process failed: Invalid Service")

    const service = await Service.findByIdAndUpdate(req.body._id, {
        serviceName: req.body.serviceName
    }, { new: true })
    if (!service) 
        return res.status(401).send("Process failed: Error updating service")
    return res.status(200).send({service})
})


router.delete('/deleteService/:_id?', async(req, res) => {
    const validId = mongoose.isValidObjectId(req.body._id);
    if (!validId) 
        return res.status(401).send("Process failed: Invalid Id");

    const findService = await Service.findById(req.params._id)
    if(!findService)
        return res.status(401).send("Process failed: Invalid service")

    const service = await Service.findByIdAndUpdate(req.params._id)
    if (!service)
        return res.status(401).send("Process failed: Error deleting service")

    return res.status(200).send({result: "Process successfull: Indicator deleted"})
})


module.exports = router;