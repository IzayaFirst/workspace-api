import { COMPANY_SCHEMA } from '../../helper/constant';

const company = (sequalize, SEQUALIZE) => {
  return sequalize.define(COMPANY_SCHEMA, {
    id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    company_name: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    company_description: {
      type: SEQUALIZE.TEXT,
    },
    company_logo: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    company_address: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
  },  { underscored: true });
}

export default company;