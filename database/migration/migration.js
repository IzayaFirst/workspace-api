import Sequelize from 'sequelize';
import IntialSchema from './schema/index.js';
import {
  DATABASE_HOST, 
  DATABASE_SCHEMA,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
} from '../helper/constant.js';

const sequelize = new Sequelize(DATABASE_SCHEMA, DATABASE_USERNAME, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: 'mariadb',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

IntialSchema(sequelize, Sequelize)

sequelize.sync({ force: true })
.then(() => {
  console.log(`Migration is done.`)
  process.exit(0);
}).catch((err) => {
  console.log(`error : ${err}`)
})
