const express = require("express");
const userController = require("../controllers/userController");
const authorization = require("../middlewares/authorization");
const range = require("../middlewares/rangeVerification");
const app = express();

app.post(
  "/createUser",
  authorization,
  range.superAndAdmin,
  userController.createdUser
);
app.get("/getUsers", authorization, userController.getUsers);

module.exports = app;
