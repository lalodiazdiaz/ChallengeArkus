const express = require("express");
const { postAccount } = require("../controllers/accountController");
const app = express();
const authorization = require("../middlewares/authorization");

app.post("/createAccount",authorization, postAccount);

module.exports = app;
