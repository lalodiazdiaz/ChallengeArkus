const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  idUser: { type: Schema.Types.ObjectId },
  name: { type: String },
  email: { type: String },
  range: { type: String },
  password: { type: String },
  englishLevel: { type: String },
  techKnowledge: { type: String },
  CV: { type: String },
});

module.exports = mongoose.model("users", userSchema);
