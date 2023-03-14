const { string } = require("joi");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const logSchema = mongoose.Schema({
  id: { type: Schema.Types.ObjectId },
  user: { type: String },
  team: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
});

module.exports = mongoose.model("logTeams", logSchema);
