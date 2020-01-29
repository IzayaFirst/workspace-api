import { WORK_EXPERIENCE_SCHEMA } from '../../helper/constant';

const workExperience = (sequalize, SEQUALIZE) => {
  return sequalize.define(WORK_EXPERIENCE_SCHEMA, {
    id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    position: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    company: {
      type: SEQUALIZE.STRING(200),
      allowNull: false,
    },
    company: SEQUALIZE.STRING(200),
    description: SEQUALIZE.TEXT,
    location: SEQUALIZE.STRING(200),
    start_date: {
      type: SEQUALIZE.DATE,
      allowNull: false,
    },
    end_date: {
      type: SEQUALIZE.DATE,
      allowNull: false,
    },
    candidate_id: SEQUALIZE.INTEGER
  },  { underscored: true });
}

export default workExperience;
