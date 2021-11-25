const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2);

const queryString = `
SELECT students.id as id, students.name as name, cohort_id, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`
const cohort_name = args[0];
const limit = args[1];
const values = [`%${cohort_name}%`,limit];

pool.query(queryString,values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort with name ${user.cohort_name}`);
  })
}).catch(err => console.error('query error', err.stack));