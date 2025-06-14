const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    budget: { type: Number },
    servicesNeeded: [{ type: String }], // e.g., ['masonry', 'plumbing']
    clientId: { type: String, required: true }, // Firebase UID
    status: { type: String, default: 'open' }, // open, bidding, assigned, completed
    bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
