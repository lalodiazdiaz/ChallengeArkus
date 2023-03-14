const express = require("express");
const userController = require("../controllers/userController");

const app = express();

app.post("/createUser", userController.createdUser);

module.exports = app;
