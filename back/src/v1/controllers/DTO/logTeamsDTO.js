const joi = require("joi");

function inputCreateLog(data) {
  const schema = joi.object({
    user: joi.string().required(),
    team: joi.string().required(),
    startDate: joi.date().required(),
    endDate: joi.date().required(),
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
}

module.exports = { inputCreateLog };
