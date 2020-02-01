import CandidateSchema from './candidate.js';
import SkillSchema from './skill.js';
import EducationSchema from './education.js';
import WorkExperienceSchema from './work_experience.js';
import Language from './language.js'; 
import CandidateLanguage from './candidate_language.js'; 
import Archievement from './archeivement.js';
import Company from './company.js';
import CompanyAccount from './company_account.js';
import Position from './position.js';

const intitialSchema = (sequalize, SEQUALIZE) => {
  const candidate = CandidateSchema(sequalize, SEQUALIZE);
  const skill = SkillSchema(sequalize, SEQUALIZE);
  const education = EducationSchema(sequalize, SEQUALIZE);
  const workExperience = WorkExperienceSchema(sequalize, SEQUALIZE);
  const language = Language(sequalize, SEQUALIZE);
  const candidateLanguage = CandidateLanguage(sequalize, SEQUALIZE);
  const archievement = Archievement(sequalize, SEQUALIZE);
  const company = Company(sequalize, SEQUALIZE)
  const companyAccount = CompanyAccount(sequalize, SEQUALIZE)
  const position = Position(sequalize, SEQUALIZE)

  candidate.hasMany(skill)
  skill.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  candidate.hasMany(education)
  education.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  candidate.hasMany(workExperience)
  workExperience.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  candidate.hasMany(candidateLanguage)
  candidateLanguage.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  language.hasMany(candidateLanguage)
  candidateLanguage.belongsTo(language, {
    foreignKey: 'language_id'
  })

  candidate.hasMany(archievement)
  archievement.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  company.hasMany(companyAccount)
  companyAccount.belongsTo(company, {
    foreignKey: 'company_id'
  })

  company.hasMany(position)
  position.belongsTo(company, {
    foreignKey: 'company_id'
  })


};

export default intitialSchema;