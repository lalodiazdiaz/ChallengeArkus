const joi = require("joi");
 
function inputCreateAccount(data) {
    const schema = joi.object({
        accountName: joi.string().required(),
        client: joi.string().required(),
        operationManager:joi.string().required()
    });

    const validatedData = schema.validate(data);

    if(validatedData.error) {
        return({
            isValid: false,
            message: validatedData.error.details[0].message.replace('\"', "").replace('\"', ""),
            data: null
        });
    }

    return validatedData.value;
}

module.exports = { inputCreateAccount };