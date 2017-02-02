SELECT * from projects
JOIN users ON users.id = projects.user_id
WHERE users.id = $1
