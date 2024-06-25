
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullname: { type: String },
  email: { type: String },
  // role: { type: String, enum: ['admin', 'cashier', 'manager'], default: 'cashier' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;


