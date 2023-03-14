const express = require("express");
const { postTeam } = require("../controllers/teamCotroller");
const app = express();

app.post("/createTeam", postTeam);

module.exports = app;
