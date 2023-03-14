const express = require("express");
const { postAccount } = require("../controllers/accountController");
const app = express();

app.post('/createAccount', postAccount)

module.exports = app; 
