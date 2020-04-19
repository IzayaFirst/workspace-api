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
import ApplyPosition from './apply_position.js';
import ApplyStatus from './apply_status.js';
import FeedBack from './feedback.js';

const intitialSchema = (sequalize, SEQUALIZE) => {
  const candidate = CandidateSchema(sequalize, SEQUALIZE);
  const skill = SkillSchema(sequalize, SEQUALIZE);
  const education = EducationSchema(sequalize, SEQUALIZE);
  const workExperience = WorkExperienceSchema(sequalize, SEQUALIZE);
  const language = Language(sequalize, SEQUALIZE);
  const candidateLanguage = CandidateLanguage(sequalize, SEQUALIZE);
  const archievement = Archievement(sequalize, SEQUALIZE);
  const company = Company(sequalize, SEQUALIZE);
  const companyAccount = CompanyAccount(sequalize, SEQUALIZE);
  const position = Position(sequalize, SEQUALIZE);
  const applyPosition = ApplyPosition(sequalize, SEQUALIZE);
  const applyStatus = ApplyStatus(sequalize, SEQUALIZE);
  // const feedback = FeedBack(sequalize, SEQUALIZE);

  candidate.hasMany(skill, {
    foreignKey: 'candidate_id'
  })
  skill.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  candidate.hasMany(education,  {
    foreignKey: 'candidate_id'
  })
  education.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  candidate.hasMany(workExperience,  {
    foreignKey: 'candidate_id'
  })
  workExperience.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  candidate.hasMany(candidateLanguage,  {
    foreignKey: 'candidate_id'
  })
  candidateLanguage.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  language.hasMany(candidateLanguage, {
    foreignKey: 'language_id'
  })
  candidateLanguage.belongsTo(language, {
    foreignKey: 'language_id'
  })

  candidate.hasMany(archievement,  {
    foreignKey: 'candidate_id'
  })
  archievement.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  // company.hasMany(companyAccount, {
  //   foreignKey: 'company_id'
  // })
  // companyAccount.belongsTo(company, {
  //   foreignKey: 'company_id'
  // })

  company.hasMany(position, {
    foreignKey: 'company_id'
  })
  position.belongsTo(company, {
    foreignKey: 'company_id'
  })

  candidate.hasMany(applyPosition, {
    foreignKey: 'candidate_id'
  });
  applyPosition.belongsTo(candidate, {
    foreignKey: 'candidate_id'
  })

  position.hasMany(applyPosition,  {
    foreignKey: 'position_id'
  });
  applyPosition.belongsTo(position, {
    foreignKey: 'position_id'
  })

  applyPosition.hasMany(applyStatus, {
    foreignKey: 'apply_position_id'
  });
  applyStatus.belongsTo(applyPosition, {
    foreignKey: 'apply_position_id'
  })

  // applyPosition.hasMany(feedback,  {
  //   foreignKey: 'apply_position_id'
  // });
  // feedback.belongsTo(applyPosition, {
  //   foreignKey: 'apply_position_id'
  // })

   

};

export default intitialSchema;