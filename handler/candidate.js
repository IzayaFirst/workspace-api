import CandidateModel from "../model/candidate";
import CandidateLanguageModel from "../model/candidate_language";
import EducationModel from "../model/education";
import SkillModel from "../model/skill";
import WorkExperienceModel from "../model/work_experience";
import ArcheivementModel from "../model/archeivement";

export default {
  async createCandidate(req, res, next) {
    const {
      user_name,
      password,
      candidate_name,
      candidate_lastname,
      date_of_birth,
      gender,
      telephone,
      email,
      able_to_work_aboard,
      facebook,
      linkedin,
      skype,
      github,
      current_salary,
      expected_salary,
      seniority,
      technology_field
    } = req.body;
    try {
      const candidate = await CandidateModel.createCandidates({
        user_name,
        password,
        candidate_name,
        candidate_lastname,
        date_of_birth,
        gender,
        telephone,
        email,
        able_to_work_aboard,
        facebook,
        linkedin,
        skype,
        github,
        current_salary,
        expected_salary,
        seniority,
        technology_field
      });
      res.json({
        data: candidate
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createCandidateLanguage(req, res, next) {
    try {
      const { candidate_id, language_id } = req.body;
      const candidateLanguage = await CandidateLanguageModel.createCandiateLanguage(
        {
          candidate_id,
          language_id
        }
      );
      res.json({
        data: candidateLanguage
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createEducation(req, res, next) {
    try {
      const {
        university,
        major,
        graduate_date,
        degree,
        gpa,
        candidate_id
      } = req.body;
      const education = await EducationModel.createEdication({
        university,
        major,
        graduate_date,
        degree,
        gpa,
        candidate_id
      });
      res.json({
        data: education
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createSkill(req, res, next) {
    try {
      const { skill_name, skill_experience, candidate_id } = req.body;
      const education = await SkillModel.createSkill({
        skill_name,
        skill_experience,
        candidate_id
      });
      res.json({
        data: education
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createWorkExperience(req, res, next) {
    try {
      const {
        position,
        company,
        description,
        location,
        start_date,
        end_date,
        candidate_id
      } = req.body;
      const education = await WorkExperienceModel.createWorkExperience({
        position,
        company,
        description,
        location,
        start_date,
        end_date,
        candidate_id
      });
      res.json({
        data: education
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createArcheivement(req, res, next) {
    try {
      const { title, archieve_date, candidate_id } = req.body;
      const education = await ArcheivementModel.createArcheivement({
        title,
        archieve_date,
        candidate_id
      });
      res.json({
        data: education
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getProfile(req, res, next) {
    try {
      const { candidate_id } = req.query;
      const candidateProfile = await CandidateModel.findCandidateById(
        candidate_id
      );
      if (candidateProfile.length) {
        const candidatePromise = [
          ArcheivementModel.findArcheivementFromCandidate(candidate_id),
          CandidateLanguageModel.getCandidateLanguageByCandidateId(
            candidate_id
          ),
          EducationModel.getEducationByCandidateId(candidate_id),
          SkillModel.getSkillByCandidateId(candidate_id),
          WorkExperienceModel.getWorkExperienceByCandidateId(candidate_id)
        ];
        const [
          archeivements,
          candidateLanguages,
          educations,
          skills,
          workExperiences
        ] = await Promise.all(candidatePromise);
        return res.status(200).json({
          data: {
            candidateProfile: candidateProfile[0],
            archeivements: archeivements.length ? archeivements[0] : [],
            candidateLanguages: candidateLanguages.length ? candidateLanguages[0] : [],
            educations: educations.length ? educations[0] : [],
            skills: skills.length ? skills[0] : [],
            workExperiences: workExperiences.length ? workExperiences[0] : []
          }
        });
      }
      return res.json({
        data: null
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
