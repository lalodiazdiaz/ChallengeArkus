const express = require("express");
const { postTeam } = require("../controllers/teamCotroller");
const app = express();
const authorization = require("../middlewares/authorization");
const range = require("../middlewares/rangeVerification");

app.post("/createTeam", authorization, range.superAndAdmin, postTeam);

module.exports = app;
