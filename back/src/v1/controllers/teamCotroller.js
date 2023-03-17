const teamDTO = require("./DTO/teamDTO");
const teamModel = require("../models/teamSchema");
const teamServices = require("../services/teamService");

const postTeam = async (req, res) => {
  try {
    const validatedData = teamDTO.inputCreateTeam(req.body);
    if (validatedData.isValid === false) {
      return res.status(422).send(validatedData);
    }

    const ifExistsTeam = await teamModel.findOne({
      team: validatedData.teamName,
    });

    if (ifExistsTeam) {
      return res.status(409).send("Team name already exists");
    }

    const data = await teamServices.createTeam(req.body);

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

const getTeams = async (req, res) => {
  try {
    const data = await teamServices.getAllTeams();
    return res.status(200).send({
      isValid: data.isValid,
      message: data.message,
      data: data.data,
    });
  } catch (error) {
    res.status(500).send({
      isValid: false,
      message: error,
      data: null,
    });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const validatedData = await teamDTO.inputDelete(req.body);
    if (validatedData.isValid === false)
      return res.status(422).send(validatedData);

    const data = await teamServices.deleteTeam(validatedData);

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
module.exports = { postTeam, getTeams, deleteTeam };
