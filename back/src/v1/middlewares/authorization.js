const tokenModel = require("../models/tokenModel");
const userModel = require("../models/userSchema");
const jwt = require("jsonwebtoken");

require("dotenv").config();

async function findByToken(token) {
  const tokenFound = tokenModel.findOne({ token });
  return tokenFound;
}

async function findById(id) {
  const user = await userModel.findById(id);
  return user;
}

const firewall = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization.splt(" ")[1];
    if (!bearer) {
      return res.status(401).send("Unauthorized");
    }
    const tokenFound = await findByToken(bearer);
    if (!tokenFound) {
      return res.status(401).send("Unauthorized");
    }
    const user = await findById(tokenFound.userID);
    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    jwt.verify(bearer, process.env.TOKEN, (error, decoded) => {
      if (error) {
        return res.status(401).send("Unauthorized");
      }
    });

    return next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};

module.exports = firewall;
