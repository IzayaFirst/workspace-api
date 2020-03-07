import KnexClient from "../database/connection/knexConnection";

function createCompany({ company_name, company_description, company_logo, company_address }) {
  const date = new Date();
  const sql = `insert into archievements(company_name, 
    company_description, company_logo, company_address, created_at, updated_at) 
    values(?, 
      ?, ?, ?, ?, ?)`;
  return KnexClient.raw(sql, [company_name, 
    company_description, company_logo, company_address, date, date]);
}

export default {
  createCompany
};
