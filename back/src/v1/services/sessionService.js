const jwt = require("jsonwebtoken");

const userModel = require("../models/userSchema");
const Token = require("../models/tokenModel");
const sessionDTO = require("../controllers/DTO/sessionDTO");
const tokenModel = require("../models/tokenModel");

require("dotenv").config();

async function addToken(token) {
  const newToken = new tokensModel(token);
  const savedToken = await newToken.save();
  return savedToken;
}

async function login(data) {
  const user = await userModel.findOne(data.email);
  const token = jwt.sign(user._id.toString(), process.env.TOKEN);

  const addedToken = await addToken({
    userID: user._id,
    token,
  });

  const filteredData = loginDTO.outputLoginDTO(addedToken, user);
  return ({ isValid: true, message: "User logged in successfully", data: filteredData});
}

module.exports = { login };
