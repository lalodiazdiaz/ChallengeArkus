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
async function deleteUser(id) {
  const user = await userModel.findOneAndDelete(id);
  return user;
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
    message: "Users retrieved successfully",
    data: user,
  };
}

async function getOneUser(data) {
  const userData = {
    name: data.name,
    email: data.email,
    range: data.range,
    englishLevel: data.englishLevel,
    techKnowledge: data.techKnowledge,
    CV: data.CV,
  };

  return {
    isValid: true,
    message: "User retrieved successfully",
    data: userData,
  };
}

async function deleteUser(data) {
  const deletedUser = await deleteUser({ _id: data.idUser });

  return {
    isValid: true,
    message: "User deleted successfully",
    data: deletedUser,
  };
}

module.exports = { userRegistration, getAllUsers, getOneUser, deleteUser };
