const mongoose = require('mongoose');

const RollSchema = new mongoose.Schema({
  title:{type:String,required:true},
  quantity: { type: Number, required: true, },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Roll = mongoose.model('rolls', RollSchema);

module.exports = Roll;