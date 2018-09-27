const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
require('./server/routes')(app);

// Setup a default catch-all route that sends back message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'test message',
}));

module.exports = app;