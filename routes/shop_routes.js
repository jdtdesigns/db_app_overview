const router = require('express').Router();

const Shop = require('../models/Shop');
const Game = require('../models/Game');

// Get all shops
router.get('/shops', (clientReq, serverRes) => {
  Shop.findAll()
    .then(shops => serverRes.json(shops))
    .catch(err => console.log(err));
});


// Create shop 
router.post('/shops', (clientReq, serverRes) => {
  const data = clientReq.body;

  Shop.create(data)
    .then(newShop => {
      serverRes.json(newShop);
    });
});

module.exports = router;