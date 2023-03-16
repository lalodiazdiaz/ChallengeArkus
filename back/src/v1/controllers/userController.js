const userDTO = require("../controllers/DTO/userDTO");
const userModel = require("../models/userSchema");
const userService = require("../services/userService");
const jwt = require("jsonwebtoken");
require("dotenv").config();
async function findById(id) {
  const user = await userModel.findById(id);
  return user;
}

async function findById(id) {
  const user = await userModel.findById(id);
  return user;
}
async function findByMail(email) {
  const user = await userModel.findOne({ email });
  return user;
}

const createdUser = async (req, res) => {
  try {
    const idUser = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.TOKEN
    );
    const { range } = await findById(idUser);
    req.body.rangeUser = range;

    const validatedData = await userDTO.inputCreateUserDTO(req.body);
    if (validatedData.isValid === false)
      return res.status(422).send(validatedData);

    const ifUserExists = await findByMail(validatedData.data.email);
    if (ifUserExists) return res.status(409).send("User already exists");

    const data = await userService.userRegistration(validatedData);
    return res.status(200).send({
      isValid: data.isValid,
      message: data.message,
      data: data.data,
    });
  } catch (error) {
    return res.status(500).send({
      isValid: false,
      message: "error server",
      data: null,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await userService.getAllUsers();
    return res.status(200).send({
      isValid: data.isValid,
      message: data.message,
      data: data.data,
    });
  } catch (error) {
    res.status(500).send({
      isValid: false,
      message: error,
      data: null,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const validatedData = await userDTO.inputGetOneUserAndDeleteUser(req.query);
    if (validatedData.isValid === false)
      return res.status(422).send(validatedData);

    const checkedUser = await findById(validatedData.idUser);
    if (!checkedUser) return res.status(409).send("The user doesn't exist");

    const data = await userService.getOneUser(checkedUser);

    return res.status(200).send({
      isValid: data.isValid,
      message: data.message,
      data: data.data,
    });
  } catch (error) {
    return res.status(500).send({
      isValid: false,
      message: error,
      data: null,
    });
  }
};

module.exports = { createdUser, getUsers, getOneUser };
