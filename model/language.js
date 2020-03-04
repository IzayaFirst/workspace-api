import KnexClient from '../database/connection/knexConnection';
import { LANGUAGE } from '../database/helper/constant';

function generateSupportLanguage() {
  const languages = []
  Object.keys(LANGUAGE).forEach((langage) => {
    languages.push(createLanguage(LANGUAGE[langage]))
  })
  return Promise.all(languages);
}

function createLanguage(language) {
  const sql = `insert into languages(language, created_at, updated_at) values(?,?,?)`;
  const date = new Date()
  return KnexClient.raw(sql, [language, date, date])
}

function getAllLanguage() {
  const sql = `select * from languages`;
  return KnexClient.raw(sql)

}
 
export default {
  generateSupportLanguage,
  getAllLanguage
};
