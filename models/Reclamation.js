const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const reclamationSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Reclamation = model("Reclamation", reclamationSchema);
