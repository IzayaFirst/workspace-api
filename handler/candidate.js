import CandidateModel from '../model/candidate';

export default {
  async createCandidate(req, res, next) {
    const {
      user_name, 
      password, 
      candidate_name, 
      candidate_lastname, 
      date_of_birth, gender, 
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
      technology_field,
    } = req.body
    try {
      const candidate = await CandidateModel.createCandidates({
        user_name, 
        password, 
        candidate_name, 
        candidate_lastname, 
        date_of_birth, gender, 
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
        technology_field,
      })
      res.json({
        data: candidate
      })
    } catch (err) {
      res.status(500).json(err)
    }

  }
}