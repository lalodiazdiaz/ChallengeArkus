const joi = require("joi");

function inputCreateTeam(data) {
  const schema = joi.object({
    teamName: joi.string().required(),
    members: joi.number(),
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

module.exports = { inputCreateTeam };
