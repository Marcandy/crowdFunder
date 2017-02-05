INSERT INTO projects (title, shortblurb, category, location, funding_duration, goal, image, video, description, risks_challenges, user_id, totalfund,  about_us)
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
RETURNING projectid, title
