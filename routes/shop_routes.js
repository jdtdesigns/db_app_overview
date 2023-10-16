const router = require('express').Router();

const Shop = require('../models/Shop');
const Game = require('../models/Game');

// Get all shops - localhost:3333/api/shops/
router.get('/', async (clientReq, serverRes) => {
  try {
    const shops = await Shop.findAll();

    serverRes.json(shops);
  } catch (err) {
    console.log(err);
  }
});

// Create shop 
router.post('/', (clientReq, serverRes) => {
  const data = clientReq.body;

  Shop.create(data)
    .then(newShop => {
      serverRes.json(newShop);
    });
});

module.exports = router;