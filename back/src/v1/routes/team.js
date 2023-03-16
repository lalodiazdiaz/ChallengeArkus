const express = require("express");
const teamController = require("../controllers/teamCotroller");
const app = express();
const authorization = require("../middlewares/authorization");
const range = require("../middlewares/rangeVerification");

app.post(
  "/createTeam",
  authorization,
  range.superAndAdmin,
  teamController.postTeam
);

app.get("/getTeams", authorization, teamController.getTeams);

module.exports = app;
