
import CompanyModel from '../model/company';

export default {
  async createCompany(req, res, next) {
    try {
      const {
        company_name, company_description, company_logo, company_address
      } = req.body
      const company = await CompanyModel.createCompany({
        company_name, company_description, company_logo, company_address
      })
      res.json({
        data: company
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

}