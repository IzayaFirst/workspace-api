import KnexClient from "../database/connection/knexConnection";

function createArcheivement({ title, archieve_date, candidate_id }) {
  const date = new Date();
  const sql = `insert into archievement(title, archieve_date, candidate_id 
    ,created_at, updated_at) 
    values(?, ?, ? ,?, ?)`;
  return KnexClient.raw(sql, [title, archieve_date, candidate_id, date, date]);
}

function findArcheivementFromCandidate(candidate_id) {
  const sql = `select * from archievement where candidate_id = ?`;
  return KnexClient.raw(sql, [candidate_id]);
}

export default {
  createArcheivement,
  findArcheivementFromCandidate
};
