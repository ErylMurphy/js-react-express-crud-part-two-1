const db = require('../database/connection');

const Building = {};

Building.all = () => {
  return db.any('SELECT * FROM buildings');
}

module.exports = Building;
