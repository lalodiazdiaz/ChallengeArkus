const logTeamsModel = require("../models/logTeamsSchema");

async function createLog(data) {
  const newLog = new logTeamsModel(data);
  const result = await newLog.save();
  return result;
}

module.exports = { createLog };
