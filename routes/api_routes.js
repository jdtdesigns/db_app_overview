const router = require('express').Router();
const db = require('../db/connection');

// Create a game - http://localhost:3333/api/games
router.post('/games', (clientReq, serverRes) => {
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

  db.query('INSERT INTO games SET ?', data, (err, result) => {
    if (err) throw err;

    serverRes.json({
      message: 'Game added successfully!',
      insertId: result.insertId
    })
  });

  // db.query('INSERT INTO games (title, genre, release_date, platform) VALUES (?, ?, ?, ?)', [data.title, data.genre, data.release_date, data.platform], (err, result) => {
  //   if (err) throw err;

  //   console.log(result);
  // });
});

// Get all games
router.get('/games', (clientReq, serverRes) => {
  db.query('SELECT * FROM games', (err, result) => {
    if (err) throw err;

    serverRes.send(result);
  });
});

// Get one game by id
router.get('/games/:game_id', (clientReq, serverRes) => {
  const gameId = clientReq.params.game_id;

  db.query('SELECT * FROM games WHERE id=?', [gameId], (err, result) => {
    if (err) throw err;


    if (!result.length) {
      return serverRes.status(404).send({
        message: 'No game found with that id.'
      })
    }

    serverRes.json(result[0]);
  });
});

// Optional game search
router.get('/game/search', (clientReq, serverRes) => {
  const searchField = clientReq.query.title ? 'title' : clientReq.query.id ? 'id' : 'genre';

  db.query('SELECT * FROM games WHERE ?? = ?', [searchField, clientReq.query[searchField]], (err, results) => {
    if (err) throw err;

    if (!results.length) {
      return serverRes.status(404).send({
        message: 'No game found with that id.'
      })
    }

    serverRes.json(results);
  })
});

// Delete a game
router.delete('/game/:id', (clientReq, serverRes) => {
  const gameId = clientReq.params.id;

  db.query('DELETE FROM games WHERE id = ?', [gameId], (err, result) => {
    if (err) throw err;

    serverRes.json({
      message: 'Game deleted successfully!',
      deleteId: gameId
    });
  });
});



module.exports = router;