const router = require('express').Router();

const Shop = require('../models/Shop');
const Game = require('../models/Game');

Shop.findByPk(1, {
  include: Game,
}).then(shop => {
  console.log(shop.games);
});

Game.findByPk(1)
  .then(async game => {
    const shop = await Shop.findByPk(1);
    game.addShop(shop);
  });

// Shop.findByPk(1)
//   .then(shop => {
//     shop.createGame({
//       title: 'Halo 3',
//       genre: 'fps',
//       release_date: '2009-7-15',
//       platform: 'xbox/pc'
//     });
//   });

// Shop.create({
//   shop_name: 'Gamestop',
//   location: 'Atlanta'
// }).then(async newShop => {
//   const newGame = await Game.create({
//     title: 'Cod',
//     genre: 'fps',
//     release_date: '2011-10-30',
//     platform: 'all'
//   });

//   await newShop.addGame(newGame);

//   console.log('Game added to shop');
// })


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