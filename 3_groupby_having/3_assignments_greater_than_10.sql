SELECT day, count(*) as total_assignments
FROM assignments
GROUP BY assignments.day
HAVING count(*) >= 10
ORDER BY day;