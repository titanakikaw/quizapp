import mongoose from "mongoose";
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
