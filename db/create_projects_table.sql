CREATE TABLE projects (
  projectId SERIAL PRIMARY KEY,
  title text,
  shortBlurb text,
  category text,
  location text,
  funding_duration  text,
  goal INTEGER,
  image text,
  video text,
  description text,
  risks_challenges text,
  user_id INTEGER REFERENCES users,
  totalfund INTEGER,
  about_us text
    )
