import KnexClient from "../database/connection/knexConnection";

function createPosition({
  title,
  description,
  level,
  degree,
  field,
  is_open,
  amount,
  company_id
}) {
  const date = new Date();
  const sql = `insert into positions(
    title,
    description,
    level,
    degree,
    field,
    is_open,
    amount,
    company_id,
    created_at,
    updated_at) 
    values(?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?)`;
  return KnexClient.raw(sql, [
    title,
    description,
    level,
    degree,
    field,
    is_open,
    amount,
    company_id,
    date,
    date
  ]);
}



function getCheckIsCandidateApplyPosition(candidate_id, position_id) {
  const sql = `select count(candidate_id) amount
    from apply_positions where 
    position_id = ? 
    and candidate_id = ?
    group by position_id`
    return KnexClient.raw(sql, [position_id, candidate_id]);
}


function getCandidateWhoApplyPosition(position_id) {
  const sql = `select 
  c.id candidate_id
  c.candidate_name candidate_name,
  c.candidate_lastname candidate_lastname,
  c.telephone telephone,
  c.email email,
  c.seniority seniority,
  c.technology_field technology_field,
  c.expected_salary expected_salary,
  p.title as title,
  p.description as description,
  p.level as job_level, 
  p.degree as job_education, 
  p.field as job_tech_field,
  FROM apply_positions ap 
  join candidates c on c.id = ap.candidate_id
  join positions p on p.id = ap.position_id
  where p.id = ?`
  return KnexClient.raw(sql, [position_id]);
}

function applyPosition({ 
  candidate_id,
  position_id
}) {
  const sql = `insert into `
}

function getJobPositionById(id) {
  const sql = `SELECT 
  p.title as title,
  p.description as description,
  p.level as job_level, 
  p.degree as education, 
  p.field as tech_field,
  p.is_open as is_open,
  c.company_name as company_name,
  c.company_description as company_description,
  c.company_address as company_address,
  p.id as position_id,
  c.id as company_id
  FROM positions p 
  join companies c on c.id = p.company_id
  where p.id = ?`;
  return KnexClient.raw(sql, [id]);

}

function getAllJob(level = "%", degree = "%", field = "%") {
  const sql = `SELECT p.title as title, 
  p.level as job_level, 
  p.degree as education, 
  p.field as tech_field, 
  c.company_name as company_name,
  c.company_address as address,
  company_logo as logo,
  p.id as position_id, 
  c.id as company_id,
  c.created_at as created_at
  FROM positions p 
  join companies c 
  on 
  c.id = p.company_id
  where p.level like ? and degree like ? 
  and field like ? and is_open = true
  order by p.updated_at desc;`;
  return KnexClient.raw(sql, [level, degree, field]);
}

export default {
  createPosition,
  getAllJob,
  getJobPositionById,
  getCandidateWhoApplyPosition,
  getCheckIsCandidateApplyPosition,
};
