const express = require('express');
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
        console.error("Service creation error:", error);
        res.status(500).json({ message: "register form error" });
    }
});

// Get all services
router.get("/all", async (req, res) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 });
        res.status(200).json({ services });
    } catch (error) {
        console.error("Get services error:", error);
        res.status(500).json({ message: "Error fetching services" });
    }
});

module.exports = router;