import KnexClient from "../database/connection/knexConnection";

function createSkill({ skill_name, skill_experience, candidate_id }) {
  const date = new Date();
  const sql = `insert into skill(skill_name, skill_experience, candidate_id ,created_at, updated_at) 
    values(?, ?, ?,?, ?)`;
  return KnexClient.raw(sql, [skill_name, skill_experience, candidate_id, date, date]);
}

function getSkillByCandidateId(candidate_id) {
  const sql = `select * from skill where candidate_id = ?`
  return KnexClient.raw(sql, [candidate_id]);
}

export default {
  createSkill,
  getSkillByCandidateId
};
