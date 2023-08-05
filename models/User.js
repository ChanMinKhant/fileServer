const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  role: {
    type: String,
    enum: ['Admin', 'Member'],
    required: true,
    default: 'Member' 
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', UserSchema)