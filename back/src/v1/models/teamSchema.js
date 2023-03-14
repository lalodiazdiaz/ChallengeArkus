const mongoose = require('mongoose');
 
const {Schema} = mongoose;

const teamSchema = mongoose.Schema({
    id:{type:Schema.Types.ObjectId},
    teamName:{type:String}
})

module.exports = mongoose.model('teams',teamSchema)