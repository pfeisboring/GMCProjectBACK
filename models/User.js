const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = User = model("user", userSchema);
