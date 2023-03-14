const logTeamsDTO = require("./DTO/logTeamsDTO");
const logTeamModel = require("../models/logTeamsSchema");
const { createLog } = require("../services/logTeamsService");

const postLog = async (req, res) => {
  console.log(req.body);
  try {
    const validatedData = logTeamsDTO.inputCreateLog(req.body);
    if (validatedData.isValid === false) {
      return res.status(422).send(validatedData);
    }

    const data = await createLog(req.body);

    return res.status(200).send({
      isValid: data.isValid,
      message: data.message,
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      isValid: false,
      message: error,
      data: null,
    });
  }
};

module.exports = { postLog };
