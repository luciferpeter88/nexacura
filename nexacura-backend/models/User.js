const mongoose = require("mongoose");

// Define the schema for the users collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profession: String,
  bio: String,
  image: String,
});

// Create a model for the users collection
const User = mongoose.model("users", userSchema);

module.exports = User;
