import KnexClient from '../database/connection/knexConnection';

function createCandidates({
  user_name, password, 
  candidate_name, candidate_lastname, 
  date_of_birth, gender, telephone, 
  email, able_to_work_aboard, facebook = "", 
  linkedin = "", skype = "", github = "", 
  current_salary, expected_salary, 
  seniority, technology_field,
}) {
  const date = new Date()
  const sql = `insert into candidate(user_name, 
    password, candidate_name, candidate_lastname, 
    date_of_birth, gender, telephone, 
    email, able_to_work_aboard, facebook, 
    linkedin, skype, github, current_salary, 
    expected_salary, seniority, technology_field, 
    created_at, updated_at) 
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
      ?, ?, ?, ?, ?, ?,?, ? , ?)`
  return KnexClient.raw(sql, [user_name,  password, 
    candidate_name, candidate_lastname, 
    date_of_birth, gender, telephone, 
    email, able_to_work_aboard, 
    facebook, linkedin, skype, github, 
    current_salary, expected_salary, 
    seniority, technology_field,
     date, date])
}

function findCandidateById(candidate_id) {
  const sql = `select * from candidate where candidate_id = ?`;
  const sql2 = `select cl.language_id as language_id,
  cl.candidate_id as candidate_id,
  l.language as language,
  cl.language_id as language_id
  from candidate_language cl 
  join language l 
  on cl.language_id = l.language_id 
  where cl.candidate_id = ?`
  const sql3 = `select * from educations where candidate_id = ?`;
  const sql4 = `select * from archievements where candidate_id = ?`;
  const sql5 = `select * from skills where candidate_id = ?`
  const sql6 = `select * from work_experiences where candidate_id = ?`;

  return Promise.all(
    KnexClient.raw(sql, [candidate_id]),
    KnexClient.raw(sql2, [candidate_id]),
    KnexClient.raw(sql3, [candidate_id]),
    KnexClient.raw(sql4, [candidate_id]),
    KnexClient.raw(sql5, [candidate_id]),
    KnexClient.raw(sql6, [candidate_id]),
  )
}

function getCandidate() {
  const sql = `select id from candidates`;
  return KnexClient.raw(sql,)
}
export default {
  createCandidates,
  findCandidateById,
  getCandidate,
}