const logTeamsModel = require("../models/logTeamsSchema");

async function createLog(data) {
  const newLog = new logTeamsModel(data);
  const result = await newLog.save();
  return result;
}

async function find(data, parameters) {
  const accounts = await logTeamsModel.find(data, parameters);
  return accounts;
}

async function getAllMoves() {
  const accounts = await find({}, { __v: 0 });

  return {
    isValid: true,
    message: "Accounts retrieved successfully",
    data: accounts,
  };
}
module.exports = { createLog, getAllMoves };
