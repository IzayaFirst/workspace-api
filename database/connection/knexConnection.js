import Knex from 'knex';
import {
  DATABASE_HOST, 
  DATABASE_SCHEMA,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} from '../helper/constant.js';

export default Knex({
  client: 'mysql',
  connection: {
    host : DATABASE_HOST,
    user : DATABASE_USERNAME,
    password : DATABASE_PASSWORD,
    database : DATABASE_SCHEMA
  }
})

