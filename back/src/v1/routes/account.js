const express = require("express");
const { postAccount } = require("../controllers/accountController");
const app = express();

app.post('/', postAccount)

module.exports = app; 
