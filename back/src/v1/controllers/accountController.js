const accountDTO = require("./DTO/accountDTO");
const accountModel = require("../models/accountSchema");
const { createAccount, getAllAccounts } = require("../services/accountService");

const postAccount = async (req, res) => {
  try {
    //   Validar informacion
    const validatedData = accountDTO.inputCreateAccount(req.body);
    if (validatedData.isValid === false) {
      return res.status(422).send(validatedData);
    }

    //   validar si existe
    const ifExistsAccount = await accountModel.findOne({
      accountName: validatedData.accountName,
    });
    if (ifExistsAccount) {
      return res.status(409).send("Account name already exists");
    }

    const data = await createAccount(req.body);

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

const getAccounts = async (req, res) => {
  try {
    const data = await getAllAccounts();
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

module.exports = { postAccount, getAccounts };
