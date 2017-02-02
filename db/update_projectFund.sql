UPDATE projects
SET totalfund = totalfund + $1
WHERE projectid = $2
RETURNING totalfund;
