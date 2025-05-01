const mongoose = require('mongoose');
const validator = require('validator');

// Define schema properly
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please enter a valid email address',
    },
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String
  }
});

// Create the model
const UserModels = mongoose.model('UserModels', userSchema);

module.exports = UserModels;
