const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  // YOU DO: Define properties of food schema
  // brand
  brand: {
    type: String,
    required: true,
  },
  // name
  name: {
    type: String,
    required: true,
  },
  // quantity
  quantity: {
    type: Number,
    required: true,
  },
  // ripeness
  isRipe: {
    type: String,
    enum: ["ripe", "unripe", "notApplicable"],
    required: true,
  },
  // freshness
  isExpired: {
    type: String,
    enum: ["expired", "unexpired"],
    required: true,
  },
});

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

const User = mongoose.model('User', userSchema);

module.exports = User;
