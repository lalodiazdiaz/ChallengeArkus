const express = require("express");
const { postLog } = require("../controllers/logTeamsCotroller");
const authorization = require("../middlewares/authorization");
const range = require("../middlewares/rangeVerification");


const app = express();

app.post("/createLog", authorization, range.superAndAdmin, postLog);

module.exports = app;
