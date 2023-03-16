const express = require("express");
const { postLog, getMoves } = require("../controllers/logTeamsCotroller");
const authorization = require("../middlewares/authorization");
const range = require("../middlewares/rangeVerification");

const app = express();

app.post("/createLog", authorization, range.superAndAdmin, postLog);

app.get("/getMoves", authorization, getMoves);

module.exports = app;
