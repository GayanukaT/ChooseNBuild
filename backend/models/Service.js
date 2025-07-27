const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    urgency: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    location: { type: String },
    needconsumption: { type: Boolean, default: false },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', serviceSchema);