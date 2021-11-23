SELECT students.name as student, AVG(assignment_submissions.duration) as average_assignment_submission
from assignment_submissions JOIN students ON student_id = students.id
WHERE students.end_date IS NULL
GROUP BY students.id
ORDER BY average_assignment_submission DESC;
