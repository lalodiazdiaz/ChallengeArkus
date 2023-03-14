const express = require("express");
const { getAccount } = require("../controllers/teamCotroller");
const app = express();

app.get('/', getAccount)

module.exports = app; 
