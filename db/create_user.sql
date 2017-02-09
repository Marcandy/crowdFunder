INSERT INTO users (username, google_id )
VALUES($1, $2)
RETURNING id, username, google_id
