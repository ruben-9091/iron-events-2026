r
const config = require('./lib/config')
const express = require('express');
const apiRouter = require('./controllers');
const loggerHttp = require('pino-http'); 
const logger = require('./lib/logger');
require('./lib/db');

const app = express();
app.use(loggerHttp({ logger: logger }))

app.use(express.json());
app.use('/api/v0', apiRouter);

app.use(errors.notFound);
app.use(errors.globalHandler); 

app.listen(config.get('port'), () => logger.info(`Application listen at port ${congig.get('port')}'`));
