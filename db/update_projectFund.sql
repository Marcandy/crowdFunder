UPDATE projects
SET totalFund = totalFund + $1
WHERE projectid = $2
RETURNING totalFund;
