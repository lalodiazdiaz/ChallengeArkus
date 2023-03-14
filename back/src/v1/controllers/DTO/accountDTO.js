const joi = require("joi");
 
function inputCreateAccount(data) {
    console.log(data);
    const schema = joi.object({
        account: joi.string().required(),
        client: joi.string().required(),
        operationManager:joi.string().required()
    });

    const validatedData = schema.validate(data);

    if(validatedData.error) {
        return({
            isValid: false,
            message: validatedData.error,
            data: null
        });
    }

    console.log(validatedData);
    return validatedData.value;
}

module.exports = { inputCreateAccount };