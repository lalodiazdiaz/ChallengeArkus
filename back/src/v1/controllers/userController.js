const userDTO = require("../controllers/DTO/userDTO");
const userModel = require("../models/userSchema");
const userService = require("../services/userService");

async function findById(id) {
  const user = await usersModel.findById(id);
  return user;
}

const createdUser = async (req, res) => {
  try {
    const idUser = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.TOKEN_SECRET
    );
    const { range } = await findById(idUser);
    req.body.rangeUser = range;

    const validatedData = await userDTO.inputCreateUserDTO(req.body);
    if (validatedData.isValid === false)
      return res.status(422).send(validatedData);

    console.log(validatedData.email);
    const ifUserExists = await userModel.findOne({
      email: validatedData.email,
    });
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
      message: "hvkjh",
      data: null,
    });
  }
};

module.exports = { createdUser };
