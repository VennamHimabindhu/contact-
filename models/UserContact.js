const mongoose = require('mongoose');

const UserContactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  topic: { type: String },
  message: { type: String, required: true, maxlength: 1000 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserContact', UserContactSchema);
