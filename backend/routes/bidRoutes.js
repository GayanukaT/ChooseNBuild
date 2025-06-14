const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

const Bid = require('../models/Bid');
const Project = require('../models/Project');

router.post('/place', verifyToken, async (req, res) => {
  if (req.user.role !== 'provider') {
    return res.status(403).json({ message: 'Only providers can bid' });
  }

  const { projectId, amount, message } = req.body;

  try {
    const project = await Project.findById(projectId);
    if (!project || project.status !== 'open') {
      return res.status(404).json({ message: 'Project not available for bidding' });
    }

    const newBid = new Bid({
      projectId,
      providerId: req.user.uid,
      amount,
      message,
    });

    const savedBid = await newBid.save();

    project.bids.push(savedBid._id);
    await project.save();

    res.status(201).json(savedBid);
  } catch (err) {
    console.error('Bid error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
