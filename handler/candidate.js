import CandidateModel from "../model/candidate";
import CandidateLanguageModel from "../model/candidate_language";
import EducationModel from '../model/education';
import SkillModel from '../model/skill';
import WorkExperience from '../model/work_experience';

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
      const {
        skill_name, skill_experience, candidate_id
      } = req.body;
      const education = await SkillModel.createSkill({
        skill_name, skill_experience, candidate_id
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
        position, company, description, location, start_date, end_date, candidate_id
      } = req.body;
      const education = await WorkExperience.createWorkExperience({
        position, company, description, location, start_date, end_date, candidate_id
      });
      res.json({
        data: education
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateProfile(req, res, next) {}
};
