
DROP DATABASE IF EXISTS games_db;
CREATE DATABASE games_db;

-- USE games_db;

-- CREATE TABLE shops (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   shop_name VARCHAR(250) NOT NULL,
--   location VARCHAR(250) NOT NULL
-- );

-- CREATE TABLE games (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(250) NOT NULL,
--   genre VARCHAR(200) NOT NULL,
--   is_beta BOOLEAN DEFAULT false,
--   release_date DATE NOT NULL,
--   platform VARCHAR(200) NOT NULL,
--   sibling_game_id INT,
--   shop_id INT,
--   FOREIGN KEY(shop_id) REFERENCES shops(id)
-- );

-- INSERT INTO shops (shop_name, location) VALUES 
--   ('Gamestop', 'Atlanta'),
--   ('Steam', 'Web');

-- INSERT INTO games (title, genre, release_date, platform, sibling_game_id, shop_id) VALUES 
--   ('COD', 'fps', '2011-9-25', 'all', null, 1),
--   ('Halo 3', 'fps', '2009-11-30', 'xbox/pc', null, 1),
--   ('No Mans Sky', 'fps/exploration', '2015-7-15','xbox/pc', 4, 2),
--   ('Oxygen Not Included', 'space exploration', '2015-9-30', 'pc', 3, null),
--   ('Assasins Creed Mirage', 'rpg/action adventure', '2023-10-5', 'all', null, null);

