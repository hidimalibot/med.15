const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
  notifcation: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
  },
  // New fields
  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  bloodType: {
    type: String,
  },
  age: {
    type: Number,
  },
  contactNumber: {
    type: String,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
