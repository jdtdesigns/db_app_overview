const router = require('express').Router();

const Shop = require('../models/Shop');
const Game = require('../models/Game');

// Create a game - http://localhost:3333/api/games
router.post('/', (clientReq, serverRes) => {
  const data = clientReq.body;

  if (!data.title || !data.genre || !data.release_date || !data.platform) {
    return serverRes.status(400).send({
      message: 'All fields must be completed.'
    })
  }

  for (let prop in data) {
    const val = data[prop];
    if (typeof val === 'string') data[prop] = val.trim();
  }


  Game.create(data)
    .then(newGame => {
      serverRes.json(newGame);
    });
});

// Get all games
router.get('/', (clientReq, serverRes) => {
  Game.findAll()
    .then(games => {
      serverRes.json(games);
    });
});

// Get one game by id
router.get('/:game_id', (clientReq, serverRes) => {
  const gameId = clientReq.params.game_id;

  Game.findByPk(gameId)
    .then(game => {
      serverRes.json(game || { message: 'Game not found with that id.' });
    });
});

// Optional game search localhost:3333/api/games/game/search
router.get('/game/search', (clientReq, serverRes) => {
  const searchField = clientReq.query.title ? 'title' : clientReq.query.id ? 'id' : 'genre';

  Game.findAll({
    where: {
      [searchField]: clientReq.query[searchField]
    }
  }).then(games => {
    serverRes.json(games.length ? games : { message: 'No games found matching your search.' });
  });
});

// Delete a game
router.delete('/game/:id', (clientReq, serverRes) => {
  const gameId = clientReq.params.id;

  Game.destroy({
    where: {
      id: gameId
    }
  }).then(() => serverRes.json({ message: 'Game deleted successfully!' }));
});



module.exports = router;