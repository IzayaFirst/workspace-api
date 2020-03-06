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

export default {
  createWorkExperience
};
