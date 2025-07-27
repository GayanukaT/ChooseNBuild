const express = require('express');
const Client = require('../models/Client');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Register User
router.post("/client/register",async (req,res) => {
    try{
        const { fullname, email, password } = req.body;

        const userExists = await Client.findOne({ email });
        
        if(userExists){
            return res.status(400).json({ message: "User already exists" });
        }

        const newClient = new Client({ fullname, email, password });
        await newClient.save();

        res.status(201).json({ message: "User registered successfully", client: newClient });
    }catch(error){
        res.status(500).json({ message: "register form error" });
    }
});

// login User
router.post("/client/login",async (req,res)=>{
    try{
        const { email, password } = req.body;
        const user = await Client.findOne({ email });
        
        if(!user){
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // generate JWT token
        const token = jwt.sign({ userId: user._id },process.env.JWT_SECRET,{ expiresIn: "7d" });

        res.status(200).json({ message: "Login successful", token, user });
    }catch(error){
        console.error("Login error:", error);
        res.status(500).json({ message: "login form error" });
    }
});


module.exports = router;