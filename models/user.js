const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Embed the foodSchema in the userSchema
  pantry: [foodSchema],
});

const foodSchema = new mongoose.Schema({
  // YOU DO: Define properties of food schema
  // name
  name: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
