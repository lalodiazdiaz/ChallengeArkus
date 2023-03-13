const joi = require("joi");
 
function inputCreateAccount(data) {
    const schema = joi.object({
        name: joi.string().required()
    });

    const validatedData = schema.validate(data);

    if(validatedData.error) {
        return({
            isValid: false,
            message: validatedData.error,
            data: null
        });
    }

    return validatedData.value;
}

module.exports = { inputCreateAccount };