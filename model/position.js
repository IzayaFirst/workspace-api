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
  const sql = `insert into workspaces.position(
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
    from apply_position where 
    position_id = ? 
    and candidate_id = ?
    group by position_id`;
  return KnexClient.raw(sql, [position_id, candidate_id]);
}

function getCandidateWhoApplyPosition(position_id) {
  const sql = `select 
  c.candidate_id candidate_id,
  concat(c.candidate_name, ' ', c.candidate_lastname) candidate_name,
  c.telephone telephone,
  c.email email,
  c.seniority seniority,
  c.technology_field technology_field,
  c.expected_salary expected_salary,
  p.level as job_level, 
  p.field as job_tech_field,
  ap.apply_position_id as apply_position_id,
  (select ass.status from apply_status ass where ass.apply_position_id = ap.apply_position_id) as status
  FROM apply_position ap 
  join candidate c on c.candidate_id = ap.candidate_id
  join workspaces.position p on p.position_id = ap.position_id
  where p.position_id = ?`;
  return KnexClient.raw(sql, [position_id]);
}

function applyPosition({ candidate_id, position_id }) {
  const date = new Date();
  const sql = `insert into apply_position(candidate_id, 
    position_id, created_at, updated_at) values(?, ?, ?, ?)`;
  return KnexClient.raw(sql, [candidate_id, 
    position_id, date, date])
    .then(result => {
      const { insertId } = result[0];
      const insertDate = new Date();
      const sqlInsert = `insert into apply_status
      (apply_position_id, 
        status, created_at, updated_at) 
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
  const sql = `update apply_status 
  set status = ? where apply_status_id = ?`;
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
  p.position_id as position_id,
  c.company_id as company_id
  FROM workspaces.position p 
  join company c on c.company_id = p.company_id
  where p.position_id = ?`;
  return KnexClient.raw(sql, [id]);
}

function getAllJob(level = "%", 
degree = "%", field = "%") {
  const sql = `SELECT p.title as title, 
  p.level as job_level, 
  p.degree as education, 
  p.field as tech_field, 
  c.company_name as company_name,
  c.company_address as address,
  company_logo as logo,
  p.position_id as position_id, 
  c.company_id as company_id,
  c.created_at as created_at
  FROM workspaces.position p 
  join company c 
  on 
  c.company_id = p.company_id
  where p.level like ? and degree like ? 
  and field like ? and is_open = true
  order by p.updated_at desc;`;
  return KnexClient.raw(sql, [level, 
    degree, field]);
}

function getApplyHistoryForCandidate(candidate_id) {
  const sql = `select 
  ap.candidate_id candidate_id,
  p.title as title,
  c.company_name as company_name,
  p.level as job_level, 
  p.field as job_tech_field,
  ap.apply_position_id as apply_position_id,
  (select ass.status from apply_status ass 
  where ass.apply_position_id = ap.apply_position_id) as status
  FROM apply_position ap 
  join workspaces.position p on p.position_id = ap.position_id
  join company c on c.company_id = p.company_id
  where ap.candidate_id = ? `;
  return KnexClient.raw(sql, [candidate_id]);
}

function addPositionFeedback({
  apply_position_id,candidate_id,
  feedback,rating
}) {
  const sql = `insert into feedback(apply_position_id, 
    candidate_id, comment, rating, created_at, updated_at) 
  values(?, ?, ?, ?, ?, ?)`;
  const date = new Date();
  return KnexClient.raw(sql, [
    apply_position_id,candidate_id,
    feedback,rating, date, date
  ]);
}

function getPositionFeedback(position_id) {
  const sql = `select f.comment comment, 
  f.id id,
  f.rating rating, 
  c.id candidate_id,
  concat(c.candidate_name, ' ', 
  c.candidate_lastname) name,
  p.title title
  from feedback f 
  join apply_position ap 
  on ap.id = f.apply_position_id
  join workspaces.position p on ap.position_id = p.position_id
  join candidate c on c.candidate_id = f.candidate_id
  where p.id = ?
  `;
  return KnexClient.raw(sql, [position_id]);
}

function getSummary(company_id) {
  const sql = `select p.title title, p.id id, 
  (select count(ass.id) from apply_statuses ass 
  join apply_positions ap on 
  ass.apply_position_id = ap.id where ass.status = ? 
  and ap.position_id = p.id) as pending,
  (select count(ass.id) from apply_statuses ass 
  join apply_positions ap on 
  ass.apply_position_id = ap.id where ass.status = ? 
  and ap.position_id = p.id) as reject,
  (select count(ass.id) from apply_statuses ass 
  join apply_positions ap on 
  ass.apply_position_id = ap.id where ass.status = ? 
  and ap.position_id = p.id) as decline,
  (select count(ass.id) from apply_statuses ass 
  join apply_positions ap on 
  ass.apply_position_id = ap.id where ass.status = ? 
  and ap.position_id = p.id) as hire
 FROM positions p where p.company_id = ?`;
  return KnexClient.raw(sql, [
    INTERVIEW_STATUS.PENDING,
    INTERVIEW_STATUS.REJECT,
    INTERVIEW_STATUS.DECLINE,
    INTERVIEW_STATUS.HIRE,
    company_id
  ]);
}

export default {
  createPosition,
  getAllJob,
  getJobPositionById,
  getCandidateWhoApplyPosition,
  getCheckIsCandidateCanApplyPosition,
  applyPosition,
  updateApplyStatus,
  getApplyHistoryForCandidate,
  addPositionFeedback,
  getPositionFeedback,
  getSummary
};
