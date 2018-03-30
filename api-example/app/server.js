/* eslint-disable no-unused-vars */

'use strict';

const config = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { logger } = config;
const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/movies_db');
const Movies = require('./models/movies-mdl');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/movies');

routes(app);
app.listen(port);
logger.info(`API Example server running on: ${port}`);
