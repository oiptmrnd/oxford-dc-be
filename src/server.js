const app = require('./app');
const logger = require('./modules/logger/logger').getLogger();
const moduleName = 'server';
const port = 4003;
app.listen(port, ()=>{
    logger.log("info", `[${moduleName}] express server is listening on port ${port}`);
});