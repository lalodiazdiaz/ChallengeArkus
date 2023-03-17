const joi = require("joi");

function inputCreateTeam(data) {
  const schema = joi.object({
    teamName: joi.string().required(),
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

function inputDelete(data) {
  try {
    const schema = joi
      .object({
        idTeam: joi.string().hex().length(24),
      })
      .unknown(false);

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

module.exports = { inputCreateTeam, inputDelete };
