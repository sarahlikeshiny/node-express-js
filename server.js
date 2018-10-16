const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.promise=require('bluebird');
const routes = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');

const { port, env, dbURI } = require('./config/environment');

mongoose.connect(dbURI);

const app = express();

if (env !== 'test') app.use(morgan('dev'));//only use morgan in dev AND production


app.use(customResponses);

//set up bodyParser to use JSON
app.use(bodyParser.json());

app.use(routes);

//gloabl errorHandler goes AFTER routes
app.use(errorHandler);

app.listen(port, () => console.log(`API online - port ${port}`));
