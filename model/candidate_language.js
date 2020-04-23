import KnexClient from "../database/connection/knexConnection";

function createCandiateLanguage({ candidate_id, language_id }) {
  const date = new Date();
  console.log('createCandiateLanguage candidate_id', candidate_id)
  console.log('createCandiateLanguage language_id', language_id)
  const sql = `insert into candidate_language(candidate_id, 
    language_id ,created_at, updated_at) 
    values(?, ?, ?, ?)`;
  return KnexClient.raw(sql, [candidate_id, language_id, date, date]);
}


function getCandidateLanguageByCandidateId(candidate_id) {
  const sql = `select cl.candidate_language_id as id,
  cl.candidate_id as candidate_id,
  l.language as language,
  cl.language_id as language_id
  from candidate_language cl 
  join language l 
  on cl.language_id = l.id 
  where cl.candidate_id = ?`
  return KnexClient.raw(sql, [candidate_id]);
}

export default {
  createCandiateLanguage,
  getCandidateLanguageByCandidateId
};
