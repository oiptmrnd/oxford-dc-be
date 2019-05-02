const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

var logger; 

const myFormat = printf(info => {
  return `${new Date().toString().split('G')[0]} ${info.level}: ${info.message}`;
});

function init() {
    logger = createLogger({
        level: process.env.OIPA_LOG_LEVEL,
        format: combine(
          myFormat
        ),
        transports: [new transports.Console()]
    });
    return logger;  
}

function getLogger() {
    if(!logger) init();
    return logger;
}

module.exports = {
    init        :   init,
    getLogger   :   getLogger
}