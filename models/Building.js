const db = require('../database/connection');

const Building = {};

Building.create = (newBuilding) => {
  return db.one('INSERT into buildings (name, year_built, city, architect, style, image) VALUES ($<name>, $<year_built>, $<city>, $<architect>, $<style>, $<image>) RETURNING *', newBuilding);
};

Building.all = () => {
  return db.any('SELECT * FROM buildings');
}

Building.find = id => {
  return db.one('SELECT * FROM buildings WHERE id = $<id>', { id: id });
};

Building.update = updateBuilding => {
  return db.none(
    "UPDATE buildings SET name = ${name}, year_built = ${year_built}, city = ${city}, architect = ${architect}, style = ${style}, image = ${image} WHERE id = ${id}",
    updateBuilding
  );
};

module.exports = Building;
