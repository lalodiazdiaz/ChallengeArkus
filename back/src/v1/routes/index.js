const express = require('express');

const app = express()

app.use('/account', require('./account'))
// app.use('/team', require('./team'))
// app.use('/user', require('./user'))

module.exports = app
