const router = require('express').Router();

// localhost:3333/api/test
router.get('/test', (req, res) => {
  res.json({
    message: 'test message'
  });
});

router.get('/test2', (req, res) => {
  res.json({
    message: 'test message 2'
  });
});

router.post('/test', (clientReq, serverRes) => {
  serverRes.json({
    message: 'data received!',
    data: clientReq.body
  });
});

module.exports = router;