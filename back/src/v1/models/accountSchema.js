const mongoose = require('mongoose');

const { Schema } = mongoose;

const accountSchema = mongoose.Schema({
    id: {type: Schema.Types.ObjectId},
    account: { type: String },
    client: {type:String},
    operationManager: {type:String}
});

module.exports = mongoose.model('accounts', accountSchema);
