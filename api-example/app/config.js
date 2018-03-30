'use strict';

require('dotenv').config();
const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: './logs/app.log' })
  ]
});

module.exports.logger = logger;
