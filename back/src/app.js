//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const express = require('express');
const app = express();
const router = express.Router();
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;
