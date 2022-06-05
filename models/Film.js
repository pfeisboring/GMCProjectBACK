const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const filmSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  annee: {
    type: Number,
    required: true,
  },
  duree: {
    type: Number,
    required: true,
  },
});

module.exports = Film = model("Film", filmSchema);
