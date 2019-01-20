DROP DATABASE IF EXISTS petpedia;
CREATE DATABASE petpedia;

\c petpedia;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  owner INT REFERENCES users(id) NOT NULL,
  type VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  age INT
);

INSERT INTO users (name, email) VALUES
('John', 'john@email.com'), ('Michelle', 'michelle@email.com');

INSERT INTO pets (owner, type, name, age) VALUES
(2, 'bunny', 'Marshmello', 1), (2, 'dog', 'Chai', 2), (1, 'cat', 'Pixel', 5);