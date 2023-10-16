const { DataTypes, Model } = require('sequelize');
const db = require('../db/connection');

class Game extends Model { }

Game.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  is_beta: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  modelName: 'game',
  sequelize: db
});

module.exports = Game;