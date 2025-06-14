const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const Project = require('../models/Project');

router.post('/create', verifyToken, async (req, res) => {
  const { title, description, location, budget, servicesNeeded } = req.body;

  if (req.user.role !== 'client') {
    return res.status(403).json({ message: 'Only clients can post projects' });
  }

  try {
    const newProject = new Project({
      title,
      description,
      location,
      budget,
      servicesNeeded,
      clientId: req.user.uid,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;