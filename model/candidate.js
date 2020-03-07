import KnexClient from '../database/connection/knexConnection';

function createCandidates({
  user_name, 
  password, 
  candidate_name, 
  candidate_lastname, 
  date_of_birth, gender, 
  telephone, 
  email, 
  able_to_work_aboard, 
  facebook, 
  linkedin, 
  skype, 
  github, 
  current_salary, 
  expected_salary, 
  seniority,
  technology_field,
}) {
  const date = new Date()
  const sql = `insert into candidates(user_name, 
    password, candidate_name, candidate_lastname, 
    date_of_birth, gender, telephone, 
    email, able_to_work_aboard, facebook, linkedin, skype, github, 
    current_salary, expected_salary, seniority, technology_field, created_at, updated_at) 
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ? , ?)`
  return KnexClient.raw(sql, [user_name,  password, candidate_name, 
    candidate_lastname, date_of_birth, gender, telephone, 
    email, able_to_work_aboard, 
    facebook, linkedin, skype, github, current_salary, expected_salary, 
    seniority, technology_field, date, date])
}

function findCandidateById(candidate_id) {
  const sql = `select * from candidates where id = ?`;
  return KnexClient.raw(sql, [candidate_id])

}
export default {
  createCandidates,
  findCandidateById
}