'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

exports.default = function () {
  var router = (0, _express.Router)();

  router.get('/joke', async function (req, res) {
    res.send({
      joke: 'Where do naughty rainbows go?'
    });
  });

  router.get('/punchline', async function (req, res) {
    res.send({
      punchline: ''
    });
  });

  return router;
};