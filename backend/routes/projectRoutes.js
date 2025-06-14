const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

router.post('/post', verifyToken, (req, res) => {
  if (req.user.role !== 'client') {
    return res.status(403).json({ message: 'Forbidden: Clients only' });
  }

  // Proceed to create project
  res.json({ message: 'Project posted by client' });
});

module.exports = router;