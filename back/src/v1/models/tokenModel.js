const mongoose = require("mongoose");

const { Schema } = mongoose;

const tokenSchema = mongoose.Schema({
  idToken: { type: Schema.Types.ObjectId },
  userId: { type: Schema.Types.ObjectId, ref: "userController" },
  token: { type: String },
});

module.exports = mongoose.model("tokens", tokenSchema);
