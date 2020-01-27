import {CANDIDATE_SCHEMA, GENDER, SENIORITY, TECH_FIELD} from '../../helper/constant';

const candidate = (sequalize, SEQUALIZE) => {
  return sequalize.define(CANDIDATE_SCHEMA, {
    id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    candidate_name: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    candidate_lastname: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    date_of_birth: {
      type: SEQUALIZE.DATE,
      allowNull: false,
    },
    gender: SEQUALIZE.ENUM(GENDER.MALE, GENDER.FEMALE),
    telephone: SEQUALIZE.STRING(20),
    email: SEQUALIZE.STRING(100),
    able_to_work_aboard: {
      type: SEQUALIZE.BOOLEAN,
      defaultValue: false,
    },
    facebook: SEQUALIZE.STRING(300),
    linkedin: SEQUALIZE.STRING(300),
    skype: SEQUALIZE.STRING(300),
    github: SEQUALIZE.STRING(300),
    current_salary: SEQUALIZE.DECIMAL(10, 2),
    expected_salary: SEQUALIZE.DECIMAL(10, 2),
    seniority: {
      type: SEQUALIZE.ENUM(SENIORITY.JUNIOR, SENIORITY.MIDDLE,
        SENIORITY.SENIOR, SENIORITY.LEAD, SENIORITY.MANAGER),
        allowNull: false,
    },
    technology_field: {
      type: SEQUALIZE.ENUM(TECH_FIELD.BUSINESS, TECH_FIELD.DESIGN,
        TECH_FIELD.MARKETING, TECH_FIELD.DEVELOPER),
        allowNull: false,
    }
  }, { underscored: true })
}

export default candidate;