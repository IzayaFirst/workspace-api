import { POSITION_SCHEMA, SENIORITY, TECH_FIELD, DEGREE } from '../../helper/constant';

const position = (sequalize, SEQUALIZE) => {
  return sequalize.define(POSITION_SCHEMA, {
    id: {
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
      type: SEQUALIZE.ENUM(SENIORITY.JUNIOR, SENIORITY.MIDDLE,
        SENIORITY.SENIOR, SENIORITY.LEAD, SENIORITY.MANAGER),
      allowNull: false,
    },
    degree: {
      type: SEQUALIZE.ENUM(DEGREE.BACHELOR, DEGREE.DOCTOR, DEGREE.MASTER, DEGREE.OTHER),
      allowNull: false,
    },
    field: {
      type: SEQUALIZE.ENUM(TECH_FIELD.BUSINESS, TECH_FIELD.DESIGN,
        TECH_FIELD.MARKETING, TECH_FIELD.DEVELOPER),
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
  },  { underscored: true });
}

export default position;