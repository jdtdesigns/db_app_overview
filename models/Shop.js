const { DataTypes, Model } = require('sequelize');
const db = require('../db/connection');
// const Game = require('./Game');

class Shop extends Model { }

Shop.init({
  shop_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  modelName: 'shop',
  sequelize: db
});

// Shop.hasMany(Game);
// Game.belongsTo(Shop);

module.exports = Shop;