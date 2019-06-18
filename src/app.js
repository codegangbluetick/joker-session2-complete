const express = require('express');
const router = require('./router');

const application = () => {
  const app = express();

  app.use('/', router());

  return app;
};

module.exports = application;
