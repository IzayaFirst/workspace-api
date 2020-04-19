import {SKILL_SCHEMA} from '../../helper/constant';

const skill = (sequalize, SEQUALIZE) => {
  return sequalize.define(SKILL_SCHEMA, {
    skill_id: {
      type: SEQUALIZE.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    skill_name: {
      type: SEQUALIZE.STRING(50),
      allowNull: false,
    },
    skill_experience: {
      type: SEQUALIZE.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    candidate_id: SEQUALIZE.INTEGER
  },  { underscored: true, freezeTableName: true, });
}

export default skill;
