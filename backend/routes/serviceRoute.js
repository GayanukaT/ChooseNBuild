const express = require('express');
const ver = require('../middleware/verifyToken');
const jwt = require("jsonwebtoken");
const Service = require('../models/Service');

const router = express.Router();

router.post("/create",async (req,res) => {
    try{
        const { title, description, urgency, location, needconsumption, email, phone } = req.body;

        const newService = new Service({ title, description, urgency, location, needconsumption, email, phone });
        await newService.save();

        res.status(201).json({ message: "Service added successfully", service: newService });
    }catch(error){
        res.status(500).json({ message: "register form error" });
    }
});

module.exports = router;