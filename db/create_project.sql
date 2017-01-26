INSERT INTO projects (title, shortBlurb, category, location, funding_duration, goal, image, video, description, risks_challenges, user_id)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING projectid, title
