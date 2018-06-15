DROP DATABASE buildingsdb;
CREATE DATABASE buildingsdb;

\c buildingsdb

DROP TABLE IF EXISTS buildings;

CREATE TABLE buildings (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  year_built INT NOT NULL,
  city TEXT NOT NULL,
  architect TEXT NOT NULL,
  style TEXT NOT NULL,
  image TEXT NOT NULL
);
