const userModel = require("../models/userSchema");

const jwt = require("jsonwebtoken");

require("dotenv").config();

async function findByToken(token) {
  const user = await tokensModel.findOne({ token });
  return user;
}

async function findById(id) {
  const user = await usersModel.findById(id);
  return user;
}

const superUserRange = async (req, res, next) => {
  const userData = await findByToken(req.headers.authorization.split(" ")[1]);

  if (userData.range !== "super") {
    return res.status(403).send({
      isValid: false,
      message: "Don't have permissions to access this resource",
      data: null,
    });
  }
  return next();
};

const superAndAdmin = async (req, res, next) => {
  const idUser = jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.TOKEN
  );

  const userData = await findById(idUser);

  if (userData.range !== "super" || userData.range !== "admin") {
    return res.status(403).send({
      isValid: false,
      message: "Don't have permissions to access this resource",
      data: null,
    });
  }
  return next();
};

module.exports = { superUserRange, superAndAdmin };
