const { inputCreateAccount } = require("./DTO/accountDTO");


const getAccount =async(req,res)=>{
    const validatedData = inputCreateAccount(req.body);
    if(validatedData.isValid === false) return(res.status(422).send(validatedData));

    


};

module.exports = { getAccount }