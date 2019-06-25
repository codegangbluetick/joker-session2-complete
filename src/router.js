const { Router } = require('express');
const { getById, add } = require('./cloudant');

const router = () => {
  const router = Router();

  router.get('/setup/:id', async (req, res) => {
    const jokeDoc = await getById(req.params.id);
    const setup = jokeDoc.setup;
    res.send({
      setup: setup,
    });
  });

  router.get('/punchline/:id', async (req, res) => {
    const jokeDoc = await getById(req.params.id);
    const punchline = jokeDoc.punchline;
    res.send({
      punchline: punchline,
    });
  });

  router.post('/joke', async (req, res) => {
    const response = await add(req.body);
    res.send(response);
  });

  return router;
};

module.exports = router;
