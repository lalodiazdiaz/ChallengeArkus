const express = require("express");
const { getAccount } = require("../controllers/accountContorller");
const app = express();

app.get('/', getAccount)

module.exports = app;
