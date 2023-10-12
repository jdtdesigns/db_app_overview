USE games_db;

SELECT 
  shops.id AS shopID,
  games.id AS game_id,
  -- id,
  title,
  genre,
  is_beta,
  release_date,
  platform,
  shop_name,
  location,
  FROM games
  JOIN shops ON shop_id=shops.id;
