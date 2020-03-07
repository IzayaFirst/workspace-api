import KnexClient from "../database/connection/knexConnection";

function createCandiateLanguage({ candidate_id, language_id }) {
  const date = new Date();
  const sql = `insert into candidate_languages(candidate_id, 
    language_id ,created_at, updated_at) 
    values(?, ?, ?, ?)`;
  return KnexClient.raw(sql, [candidate_id, language_id, date, date]);
}


function getCandidateLanguageByCandidateId(candidate_id) {
  const sql = `select cl.id as id,
  cl.candidate_id as candidate_id,
  l.language as language,
  cl.language_id as language_id
  from candidate_languages cl 
  join languages l 
  on cl.language_id = l.id 
  where cl.candidate_id = ?`
  return KnexClient.raw(sql, [candidate_id]);
}

export default {
  createCandiateLanguage,
  getCandidateLanguageByCandidateId
};
