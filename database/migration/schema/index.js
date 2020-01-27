import CandidateSchema from './candidate.js';
import SkillSchema from './skill.js';

const intitialSchema = (sequalize, SEQUALIZE) => {
  const candidate = CandidateSchema(sequalize, SEQUALIZE)
  const skill = SkillSchema(sequalize, SEQUALIZE)

  candidate.hasMany(skill)
  skill.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })
};

export default intitialSchema;