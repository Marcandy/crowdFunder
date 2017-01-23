INSERT INTO users(username, email, timezone, password_digest)
VALUES($1, $2, $3, $4)
returning id
