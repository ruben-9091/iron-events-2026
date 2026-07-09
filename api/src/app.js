r
const config = require('./lib/config')
const express = require('express');
const apiRouter = require('./controllers');

require('./lib/db');

const app = express();

app.use(express.json());
app.use('/api/v0', apiRouter);

app.use(errors.notFound);
app.use(errors.globalHandler); 


app.listen(config.get('port'), () => console.info(`Application listen at port ${port}'`));
