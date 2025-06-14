const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Example route
app.get('/', (req, res) => {
  res.send('ChooseNBuild API is running');
});

// TODO: Mount routes
// app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
nst express = require('express');
const cors = require('cors');
consuyht dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
g
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Example route
app.get('/', (req, res) => {
  res.send('ChooseNBuild API is running');
});

// TODO: Mount routes
// app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const projectRoutes = require('./routes/projectRoutes');
app.use('api/projects', projectRoutes);
