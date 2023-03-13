const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.use("/api",require(`../src/${process.env.VERSION}/routes`));

app.listen(process.env.PORT, () =>
  console.log(" server listening on port", process.env.PORT)
);
