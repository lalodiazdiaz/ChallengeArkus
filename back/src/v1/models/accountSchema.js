const mongoose = require('mongoose');

const { Schema } = mongoose();

const accountSchema = new Schema({
    name: { type: String }
});

module.exports = mongoose.model('accounts', accountSchema);
