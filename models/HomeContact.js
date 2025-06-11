const mongoose = require('mongoose');

const HomeContactSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true, maxlength: 1000 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HomeContact', HomeContactSchema);
