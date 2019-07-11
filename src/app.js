const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const application = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });
  app.use('/', router());

  return app;
};

module.exports = application;
