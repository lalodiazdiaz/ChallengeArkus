const express = require("express");
const {
  postAccount,
  getAccounts,
  deleteAccount,
} = require("../controllers/accountController");
const app = express();
const authorization = require("../middlewares/authorization");
const range = require("../middlewares/rangeVerification");

app.post("/createAccount", authorization, range.superAndAdmin, postAccount);
app.get("/getAccounts", authorization, getAccounts);
app.delete("/deleteAccount", authorization, deleteAccount);

module.exports = app;
