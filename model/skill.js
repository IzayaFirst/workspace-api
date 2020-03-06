import KnexClient from "../database/connection/knexConnection";

function createSkill({ skill_name, skill_experience, candidate_id }) {
  const date = new Date();
  const sql = `insert into skills(skill_name, skill_experience, candidate_id ,created_at, updated_at) 
    values(?, ?, ?,?, ?)`;
  return KnexClient.raw(sql, [skill_name, skill_experience, candidate_id, date, date]);
}

export default {
  createSkill
};
