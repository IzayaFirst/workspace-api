import KnexClient from "../database/connection/knexConnection";

function createEducation({
  university,
  major,
  graduate_date,
  degree,
  gpa,
  candidate_id
}) {
  const date = new Date();
  const sql = `insert into educations(university, major, graduate_date, degree, gpa, candidate_id 
    ,created_at, updated_at) 
    values(?, ?, ?, ?, ?, ? 
      ,?, ?)`;
  return KnexClient.raw(sql, [
    university,
    major,
    graduate_date,
    degree,
    gpa,
    candidate_id,
    date,
    date
  ]);
}

function getEducationByCandidateId(candidate_id) {
  const sql = `select * from educations where candidate_id = ?`;
  return KnexClient.raw(sql, [candidate_id]);
}

export default {
  createEducation,
  getEducationByCandidateId
};
