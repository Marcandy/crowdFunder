CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username text,
  email text,
  timezone text,
  password_digest text

);