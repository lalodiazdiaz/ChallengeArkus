const userModel = require("../models/userSchema");
const bycrypt = require("bcryptjs");

async function addUser(data) {
  const user = new userModel(data);
  const addedUser = user.save();
  return addedUser;
}

async function userRegistration(data) {
  const encryptedPassword = await bycrypt.hash(data.data.password, 10);
  data.data.password = encryptedPassword;

  const createdUser = await addUser(data.data);
  return {
    isValid: true,
    message: `${createdUser.range} created successfully`,
    data: createdUser,
  };
}

module.exports = { userRegistration };
