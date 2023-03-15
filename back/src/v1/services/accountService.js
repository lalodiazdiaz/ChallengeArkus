const accountModel = require("../models/accountSchema");

async function createAccount(data) {
  const newAccount = new accountModel(data);
  const result = await newAccount.save();
  return result;
}

async function find(data, parameters) {
  const accounts = await accountModel.find(data, parameters);
  return accounts;
}
async function getAllAccounts() {
  const accounts = await find({}, { __v: 0 });

  return {
    isValid: true,
    message: "Accounts retrieved successfully",
    data: accounts,
  };
}

module.exports = { createAccount, getAllAccounts };
