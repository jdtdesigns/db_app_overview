const router = require('express').Router();

const game_routes = require('./game_routes');
const shop_routes = require('./shop_routes');

// localhost:3333/api/games
router.use('/games', game_routes);
// localhost:3333/api/shops
router.use('/shops', shop_routes);

// router.use('/api', [game_routes, shop_routes]);

module.exports = router;