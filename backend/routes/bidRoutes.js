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

router.get('/project/:projectId', verifyToken, async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findById(projectId).populate('bids');

    if (!project) return res.status(404).json({ message: 'Project not found' });

    if (req.user.role !== 'client' || req.user.uid !== project.clientId) {
      return res.status(403).json({ message: 'Unauthorized access' });
    }

    res.json(project.bids);
  } catch (err) {
    console.error('Fetching bids failed:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/:bidId/respond', verifyToken, async (req, res) => {
  const { bidId } = req.params;
  const { action } = req.body; // action: 'accept' or 'reject'

  try {
    const bid = await Bid.findById(bidId);
    if (!bid) return res.status(404).json({ message: 'Bid not found' });

    const project = await Project.findById(bid.projectId);
    if (!project || req.user.uid !== project.clientId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    if (action === 'accept') {
      bid.status = 'accepted';
      project.status = 'assigned'; // or any convention like "in progress"
    } else if (action === 'reject') {
      bid.status = 'rejected';
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }

    await bid.save();
    await project.save();

    res.json({ message: `Bid ${action}ed successfully`, bid });
  } catch (err) {
    console.error('Responding to bid failed:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
