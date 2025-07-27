const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const providerRoutes = require('./routes/providerRoutes');
const clientRoutes = require('./routes/clientRoutes');
const serviceRoute = require('./routes/serviceRoute');

dotenv.config();

const app = express();
app.use(express.json());

// Middleware
app.use(cors());
app.use(express.json());

// Connect to mongoDB
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Mongo DB connected"))
.catch((err) => console.log("Mongo DB error", err));

// Routes
app.use("/api/user",providerRoutes);
app.use("/api/user",clientRoutes);
app.use("/api/service",serviceRoute);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});