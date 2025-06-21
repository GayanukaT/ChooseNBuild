const express = require('express');
const Provider = require('../models/Provider');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Register User
router.post("/provider/register",async (req,res) => {
    try{ 
        const { businessname, businesstype, email, password } = req.body;

        console.log(businessname, businesstype, email, password);
        
        const userExists = await Provider.findOne({ email });

        if(userExists){
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new Provider({ businessname, businesstype, email, password });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully", provider: newUser });
    }catch(error){
        console.error("Register Error:", error);
        res.status(500).json({ message: "register form error" });
    }
});

// login
router.post("/provider/login",async (req,res)=>{
    try{
        const { email, password } = req.body;
        const user = await Provider.findOne({ email });
        
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
