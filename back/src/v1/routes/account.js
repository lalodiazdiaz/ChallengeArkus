const express = require("express");
const { postAccount } = require("../controllers/accountController");
const app = express();
const authorization = require("../middlewares/authorization");
const range = require("../middlewares/rangeVerification");

app.post("/createAccount", authorization, range.superAndAdmin, postAccount);

module.exports = app;
