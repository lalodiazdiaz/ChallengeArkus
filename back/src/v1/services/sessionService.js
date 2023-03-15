const jwt = require("jsonwebtoken");

const userModel = require("../models/userSchema");
const Token = require("../models/tokenModel");
const sessionDTO = require("../controllers/DTO/sessionDTO");

require("dotenv").config();

async function addToken(token) {
  const newToken = new Token(token);
  const savedToken = await newToken.save();
  console.log(savedToken);
  return savedToken;
}

async function login(data) {
  const user = await userModel.findOne({ email: data.email });

  const token = jwt.sign(user._id.toString(), process.env.TOKEN);

  const addedToken = await addToken({
    userID: user._id,
    token,
  });

  const filteredData = sessionDTO.outputLoginDTO(addedToken, user);
  return { isValid: true, message: "User logged", data: filteredData };
}

module.exports = { login };
