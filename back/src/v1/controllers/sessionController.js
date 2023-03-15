const sessionService = require("../services/sessionService");
const sessionDTO = require("../controllers/DTO/sessionDTO");
const userModel = require("../models/userSchema");
const bycrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const validatedData = await sessionDTO.inputLoginDTO(req.body);

    if (validatedData.isValid === false) {
      return res.status(404).send({
        isValid: false,
        message: "User not valid",
        data: validatedData,
      });
    }
    const user = await userModel.findOne({ email: validatedData.email });
    if (!user) {
      return res.status(404).send({
        isValid: false,
        message: "User not found",
        data: null,
      });
    }
    const validatedPassword = await bycrypt.compare(
      validatedData.password,
      user.password
    );

    if (!validatedPassword) {
      return res.status(401).send({
        isValid: false,
        message: "The email or the password is incorrect",
        data: null,
      });
    }

    const data = await sessionService.login(req.body);

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

module.exports = { login };
