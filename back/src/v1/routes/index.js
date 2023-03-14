const express = require("express");

const app = express();

app.use("/accounts", require("./account"));
app.use("/teams", require("./team"));
app.use("/log", require("./logTeams"));
app.use("/users", require("./user"));

module.exports = app;
