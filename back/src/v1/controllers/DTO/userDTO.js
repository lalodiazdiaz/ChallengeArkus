const joi = require("joi");

function inputCreateUserDTO(data) {
  try {
    //esquema para agregar usuarios admins y super dependiendo el rango
    const schema = joi.object({
      rangeUser: joi.string().valid("admin", "user", "super"),
      data: joi
        .any()
        .when(
          "rangeUser",
          {
            is: "admin",
            then: joi
              .object({
                name: joi.string().required(),
                email: joi.string().email().required(),
                range: joi.string().valid("user").required(),
                password: joi.string().required(),
                englishLevel: joi.string().optional(),
                techKnowledge: joi.string().optional(),
                CV: joi.string().uri().optional(),
              })
              .unknown(false),
          },
          {
            is: "super",
            then: joi
              .object({
                name: joi.string().required(),
                email: joi.string().email().required(),
                range: joi.string().valid("admin", "user").required(),
                password: joi.string().required(),
                englishLevel: joi.string().optional(),
                techKnowledge: joi.string().optional(),
                CV: joi.string().uri().optional(),
              })
              .unknown(false),
          }
        )
        .required(),
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
