const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'test message',
}));

module.exports = app;