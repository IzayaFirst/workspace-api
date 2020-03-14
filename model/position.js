import KnexClient from "../database/connection/knexConnection";
import { INTERVIEW_STATUS } from "../database/helper/constant";

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

function getCheckIsCandidateCanApplyPosition({ candidate_id, position_id }) {
  const sql = `select count(candidate_id) as amount
    from apply_positions where 
    position_id = ? 
    and candidate_id = ?
    group by position_id`;
  return KnexClient.raw(sql, [position_id, candidate_id]);
}

function getCandidateWhoApplyPosition(position_id) {
  const sql = `select 
  c.id candidate_id,
  concat(c.candidate_name, ' ', c.candidate_lastname) candidate_name,
  c.telephone telephone,
  c.email email,
  c.seniority seniority,
  c.technology_field technology_field,
  c.expected_salary expected_salary,
  p.level as job_level, 
  p.field as job_tech_field,
  ap.id as apply_position_id,
  (select ass.status from apply_statuses ass where ass.apply_position_id = ap.id) as status
  FROM apply_positions ap 
  join candidates c on c.id = ap.candidate_id
  join positions p on p.id = ap.position_id
  where p.id = ?`;
  return KnexClient.raw(sql, [position_id]);
}

function applyPosition({ candidate_id, position_id }) {
  const date = new Date();
  const sql = `insert into apply_positions(candidate_id, position_id, created_at, updated_at) values(?, ?, ?, ?)`;
  return KnexClient.raw(sql, [candidate_id, position_id, date, date])
    .then(result => {
      const { insertId } = result[0];
      const insertDate = new Date();
      const sqlInsert = `insert into apply_statuses(apply_position_id, status, created_at, updated_at) 
      values (?, ?, ?, ?)`;
      return KnexClient.raw(sqlInsert, [
        insertId,
        INTERVIEW_STATUS.PENDING,
        insertDate,
        insertDate
      ]);
    })
    .catch(err => err);
}

function updateApplyStatus({ status, apply_status_id }) {
  const sql = `update apply_statuses set status = ? where id = ?`;
  return KnexClient.raw(sql, [status, apply_status_id]);
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
  getCheckIsCandidateCanApplyPosition,
  applyPosition,
  updateApplyStatus
};
