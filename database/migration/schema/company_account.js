import { COMPANY_ACCOUNT_SCHEMA } from '../../helper/constant';

const company_account = (sequalize, SEQUALIZE) => {
  return sequalize.define(COMPANY_ACCOUNT_SCHEMA, {
    id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    password: {
      type: SEQUALIZE.TEXT,
      allowNull: false,
    },
    first_name: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    last_name: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    company_id: SEQUALIZE.INTEGER
  },  { underscored: true });
}

export default company_account;