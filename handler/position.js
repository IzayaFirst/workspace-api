import CompanyModel from "../model/company";
import PositionModel from "../model/position";
export default {
  async createPosition(req, res, next) {
    try {
      const {
        company_name,
        company_description,
        company_logo,
        company_address
      } = req.body;
      const company = await CompanyModel.createCompany({
        company_name,
        company_description,
        company_logo,
        company_address
      });
      res.json({
        data: company
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getJobPositionById(req, res, next) {
    try {
      const { position_id } = req.query;
      console.log("position_id", position_id);
      const jobs = await PositionModel.getJobPositionById(position_id);
      res.json({
        data: jobs[0]
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getAllJob(req, res, next) {
    try {
      const { level, degree, field } = req.query;
      console.log(typeof level, degree, field);
      const jobs = await PositionModel.getAllJob(
        level === "null" ? undefined : level,
        degree === "null" ? undefined : degree,
        field === "null" ? undefined : field
      );
      res.json({
        data: jobs[0]
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async applyPosition(req, res, next) {
    try {
      const { position_id, candidate_id } = req.query;
      const checkIsCandidateCanApply = await PositionModel.getCheckIsCandidateCanApplyPosition(
        { candidate_id, position_id }
      );
      console.log("checkIsCandidateCanApply", checkIsCandidateCanApply);
      if (checkIsCandidateCanApply[0].length === 0) {
        console.log("can apply");
        const apply = await PositionModel.applyPosition({
          position_id,
          candidate_id
        });
        return res.json({
          data: apply[0]
        });
      }
      return res.json({
        data: null
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getWhoApplyPosition(req, res, next) {
    try {
      const { position_id } = req.query;
      const whoApplyPositon = await PositionModel.getCandidateWhoApplyPosition(
        position_id
      );
      res.json({
        data: whoApplyPositon[0]
      });
    } catch (err) {
      console.log(err);

      res.status(500).json(err);
    }
  },
  async getPositionWhoApply(req, res, next) {
    try {
      const { candidate_id } = req.query;
      const applyHist = await PositionModel.getApplyHistoryForCandidate(
        candidate_id
      );
      res.json({
        data: applyHist[0]
      });
    } catch (err) {
      console.log(err);

      res.status(500).json(err);
    }
  },
  async feedback(req, res, next) {
    try {
      const { apply_position_id, candidate_id, feedback, rating } = req.query;
      console.log(apply_position_id, candidate_id, feedback, rating)
      const fb = await PositionModel.addPositionFeedback({
        apply_position_id,
        candidate_id,
        feedback,
        rating
      });
      res.json({
        data: fb[0]
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getFeedback(req, res, next) {
    try {
      const { position_id } = req.query;
      const fb = await PositionModel.getPositionFeedback(
        position_id
      );
      res.json({
        data: fb[0]
      });
    } catch (err) {
      console.log(err);

      res.status(500).json(err);
    }
  },
  async getSummary(req, res, next) {
    try {
      const { company_id } = req.query;
      const summary = await PositionModel.getSummary(
        company_id
      );
      res.json({
        data: summary[0]
      });
    } catch (err) {
      console.log(err);

      res.status(500).json(err);
    }
  }
};
