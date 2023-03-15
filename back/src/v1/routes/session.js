const express = require("express");
const loginController = require("../controllers/sessionController");

const app = express();

app.post("/", loginController.login);

module.exports = app;
