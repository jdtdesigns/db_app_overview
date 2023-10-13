const express = require('express');
const api_routes = require('./routes');
const db = require('./db/connection');

const app = express();

const PORT = process.env.PORT || 3333;

// Add Middleware
app.use(express.json());

// Load Routes localhost:3333/api
app.use('/api', api_routes);

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log('Server started on port', PORT));
  });