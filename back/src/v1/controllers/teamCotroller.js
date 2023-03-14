const teamDTO = require("./DTO/teamDTO");
const teamModel = require("../models/teamSchema");
const { createTeam } = require("../services/teamService");

const postTeam = async (req, res) => {
  try {
    const validatedData = teamDTO.inputCreateTeam(req.body);
    if (validatedData.isValid === false) {
      return res.status(422).send(validatedData);
    }

    const ifExistsAccount = await teamModel.findOne({
      team: validatedData.team,
    });
    if (ifExistsAccount) {
      return res.status(409).send("Team name already exists");
    }

    const data = await createTeam(req.body);

    return res.status(200).send({
      isValid: data.isValid,
      message: data.message,
      data: data.data,
    });
    
  } catch (error) {
    return res.status(500).send({
      isValid: false,
      message: error,
      data: null,
    });
  }
};

module.exports = { postTeam };
