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

export default {
  createEducation
};
