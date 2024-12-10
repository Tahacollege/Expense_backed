const mongoose = require('mongoose');

const CreditSchema = new mongoose.Schema({
  title: { type: String, required: true },
  quantity: { type: Number, required: true, },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Credit = mongoose.model('credits', CreditSchema);

module.exports = Credit;