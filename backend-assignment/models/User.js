const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  displayname: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  profile: { type: String },
  organization: { type: String },
  dob: { type: String },
  password: { type: String },
  charts: [{ type: String }],
  productFeatures: [{ type: String }],
});

module.exports = mongoose.model('User', userSchema);
