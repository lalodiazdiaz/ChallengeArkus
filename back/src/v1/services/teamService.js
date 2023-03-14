const teamModel = require('../models/teamSchema');

async function createTeam(data) {
    
    const newTeam = new teamModel(data)
    const result = newTeam.save()
    return result
}

module.exports = {createTeam}