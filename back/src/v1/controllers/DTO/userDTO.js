const joi = require("joi");

function inputCreateUserDTO(data) {
  console.log(data);
  try {
    const schema = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      range: joi.string().required(),
      password: joi.string().required(),
      englishLevel: joi.string().optional(),
      techKnowledge: joi.string().optional(),
      CV: joi.string().uri().optional(),
    });

    const validatedData = schema.validate(data);
    if (validatedData.error) {
      return {
        isValid: false,
        message: validatedData.error.details[0].message
          .replace('"', "")
          .replace('"', ""),
        data: null,
      };
    }

    return validatedData.value;
  } catch (error) {
    return { isValid: false, message: error, data: null };
  }
}
module.exports = { inputCreateUserDTO };
