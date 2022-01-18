const mongoose = require("mongoose");
const validator = require("validator");

const schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First name is required"],
    minlength: 5,
    maxlength: 255,

  },
  last_name: {
    type: String,
    required: [true, "Last name is required"],
    minlength: 5,
    maxlength: 255,
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required"],
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  
  email: {
    type: String,
    required: [true, "Your valid email address is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Kindly input a valid email address"],
  },

  entries:{
    type: Number,
    default: 1,
  }
  
});
exports.userModel = mongoose.model("User", schema);