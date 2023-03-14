const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  `/api/${process.env.VERSION}`,
  require(`../src/${process.env.VERSION}/routes`)
);

app.use((req, res, next) => {
  return res.status(404).send({
    isValid: false,
    message: `URL ${req.url} not found`,
    data: null,
  });
});

app.listen(process.env.PORT, () =>
  console.log(" server listening on port", process.env.PORT)
);
