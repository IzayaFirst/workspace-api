import { POSITION_SCHEMA, SENIORITY, TECH_FIELD, DEGREE } from '../../helper/constant';

const position = (sequalize, SEQUALIZE) => {
  return sequalize.define(POSITION_SCHEMA, {
    position_id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    description: {
      type: SEQUALIZE.TEXT,
      allowNull: false,
    },
    level: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    degree: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    field: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    is_open: {
      type: SEQUALIZE.BOOLEAN,
      defaultValue: true,
    },
    amount: {
      type: SEQUALIZE.INTEGER,
    },
    company_id: SEQUALIZE.INTEGER
  },  { underscored: true, freezeTableName: true, });
}

export default position;