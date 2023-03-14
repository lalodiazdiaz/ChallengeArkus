const accountModel = require('../models/accountSchema');

async function createAccount(data) {
  
const newAccount = new accountModel(data)
const result = await newAccount.save()
return result 
}

module.exports = {createAccount}