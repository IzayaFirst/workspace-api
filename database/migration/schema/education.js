import {EDUCATION_SCHEMA, DEGREE} from '../../helper/constant';

const education = (sequalize, SEQUALIZE) => {
  return sequalize.define(EDUCATION_SCHEMA, {
    id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    university: {
      type: SEQUALIZE.STRING(100),
      allowNull: false,
    },
    major: {
      type: SEQUALIZE.STRING(100),
      allowNull: false,
    },
    graduate_date: {
      type: SEQUALIZE.DATE,
      allowNull: false,
    },
    degree: {
      type: SEQUALIZE.ENUM(DEGREE.BACHELOR, DEGREE.DOCTOR, DEGREE.MASTER, DEGREE.OTHER),
      allowNull: false,
    },
    gpa: {
      type: SEQUALIZE.DOUBLE,
    },
    candidate_id: SEQUALIZE.INTEGER
  },  { underscored: true });
}

export default education;
