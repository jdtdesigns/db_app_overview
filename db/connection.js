const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('games_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;