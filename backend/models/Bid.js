const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    providerId: { type: String, required: true },
    amount: { type: Number, required: true },
    message: { type: String },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Bid', bidSchema);