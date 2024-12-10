const mongoose = require('mongoose');

const DebitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  quantity: { type: Number, required: true, },
  amount: { type: Number, required: true },
  debit: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Debit = mongoose.model('debits', DebitSchema);

module.exports = Debit;