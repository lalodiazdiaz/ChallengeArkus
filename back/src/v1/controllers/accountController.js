const { inputCreateAccount } = require("./DTO/accountDTO");
const accountModel =  require('../models/accountSchema');
const { createAccount } = require("../services/accountService");


const postAccount =async(req,res)=>{
    console.log(req.body);
    const validatedData = inputCreateAccount(req.body);
    if(!validatedData.isValid ) return(res.status(422).send(validatedData));

    const ifExistsAccount = await accountModel.findOne({account : validatedData.account})
    if (ifExistsAccount) {  
        return (res.status(409).send('alv me vale verga me vale verga'))
    }

    
    const newAccount = createAccount()

    return(res.status(200).send({
        isValid: true,
        message: "Account created",
        data: newAccount
    }))


};

module.exports = { postAccount }