const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const commentaireSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Commentaire = model("Commentaire", commentaireSchema);
