import KnexClient from "../database/connection/knexConnection";

function createCandiateLanguage({ candidate_id, language_id }) {
  const date = new Date();
  const sql = `insert into candidate_languages(candidate_id, 
    language_id ,created_at, updated_at) 
    values(?, ?, ?, ?)`;
  return KnexClient.raw(sql, [candidate_id, language_id, date, date]);
}

export default {
  createCandiateLanguage
};
