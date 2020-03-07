import KnexClient from "../database/connection/knexConnection";

function createWorkExperience({
  position,
  company,
  description,
  location,
  start_date,
  end_date,
  candidate_id
}) {
  const date = new Date();
  const sql = `insert into work_experiences(position, company, 
    description, location, start_date, end_date, candidate_id
    ,created_at, updated_at) 
    values(?, ?, ?, ?, ?, ?, ? ,?, ?)`;
  return KnexClient.raw(sql, [
    position,
    company,
    description,
    location,
    start_date,
    end_date,
    candidate_id,
    date,
    date
  ]);
}

function getWorkExperienceByCandidateId(candidate_id) {
  const sql = `select * from work_experiences where candidate_id = ?`;
  return KnexClient.raw(sql, [candidate_id]);
}

export default {
  createWorkExperience,
  getWorkExperienceByCandidateId
};
