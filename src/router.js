const { Router } = require('express');

const router = () => {
  const router = Router();

  router.get('/setup', async (req, res) => {
    res.send({
      joke: 'Where do naughty rainbows go?',
    });
  });

  router.get('/punchline', async (req, res) => {
    res.send({
      punchline: '',
    });
  });

  return router;
};

module.exports = router;
