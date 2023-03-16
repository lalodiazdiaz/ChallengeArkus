const userModel = require("../models/userSchema");
const bycrypt = require("bcryptjs");

async function addUser(data) {
  const user = new userModel(data);
  const addedUser = user.save();
  return addedUser;
}

async function find(data) {
  const accounts = await userModel.find(data);
  return accounts;
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

async function getAllUsers() {
  const user = await find({});

  return {
    isValid: true,
    message: "Accounts retrieved successfully",
    data: user,
  };
}

module.exports = { userRegistration, getAllUsers };
