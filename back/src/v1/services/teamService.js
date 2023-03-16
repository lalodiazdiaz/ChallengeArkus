const teamModel = require("../models/teamSchema");

async function createTeam(data) {
  const newTeam = new teamModel(data);
  const result = newTeam.save();
  return result;
}

async function find(data) {
  const teams = await teamModel.find(data);
  return teams;
}

async function getAllTeams() {
  const teams = await find({});

  return {
    isValid: true,
    message: "Teams retrieved successfully",
    data: teams,
  };
}

module.exports = { createTeam, getAllTeams };
