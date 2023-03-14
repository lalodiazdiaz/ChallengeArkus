const express = require("express");
const { postLog } = require("../controllers/logTeamsCotroller");

const app = express();

app.post("/createLog", postLog);

module.exports = app;
