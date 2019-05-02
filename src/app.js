const env = (process.env.NODE_ENV) || 'development';
const moduleName = 'app';
const logger = require('./modules/logger/logger');
var myLog = logger.init();
myLog.log('info', `[${moduleName}] server is running in ${ env } mode`);

const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ limit: "10mb"}));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Access-Token');
    res.header('Access-Control-Allow-Methods', 'GET');
    if(req.method == 'OPTIONS') res.sendStatus(200);
    else next();
});

app.use('/oxford', require('./modules/router'));

module.exports = app;


