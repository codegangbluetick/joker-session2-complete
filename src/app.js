const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const application = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use('/', router());

  return app;
};

module.exports = application;
