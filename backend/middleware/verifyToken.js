const admin = require('../config/firebaseAdmin');
const User = require('../models/User'); // assuming role stored in MongoDB

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token' });
  }

  const idToken = authHeader.split(' ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;

    // Fetch role from DB
    const user = await User.findOne({ uid: decodedToken.uid });
    if (!user) return res.status(403).json({ message: 'User not found' });

    req.user.role = user.role;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = verifyToken;
