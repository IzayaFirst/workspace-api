import KnexClient from "../database/connection/knexConnection";

function createPosition({
  title,
  description,
  level,
  degree,
  field,
  is_open,
  amount,
  company_id
}) {
  const date = new Date();
  const sql = `insert into positions(
    title,
    description,
    level,
    degree,
    field,
    is_open,
    amount,
    company_id,
    created_at,
    updated_at) 
    values(?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?)`;
  return KnexClient.raw(sql, [
    title,
    description,
    level,
    degree,
    field,
    is_open,
    amount,
    company_id,
    date,
    date
  ]);
}

export default {
  createPosition
};
