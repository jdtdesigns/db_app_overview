const express = require('express');
const api_routes = require('./routes/api_routes');
const db = require('./db/connection');

const app = express();

const PORT = process.env.PORT || 3333;

// Add Middleware
app.use(express.json());

// Load Routes
app.use('/api', api_routes);

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log('Server started on port', PORT));
  });