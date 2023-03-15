const express = require("express");
const {
  postAccount,
  getAllAccounts,
  getAccounts,
} = require("../controllers/accountController");
const app = express();
const authorization = require("../middlewares/authorization");
const range = require("../middlewares/rangeVerification");

app.post("/createAccount", authorization, range.superAndAdmin, postAccount);
app.get("/getAccounts", authorization, getAccounts);

module.exports = app;
