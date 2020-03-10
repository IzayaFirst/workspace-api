import CompanyModel from "../model/company";
import PositionModel from '../model/position';
import randomInt from "../helpers/random";
import {
  generateCompanyAttribute,
  generatePositionAttribute,
} from "../helpers/generate";

export default {
  async createCompany(req, res, next) {
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
  async generateCompanyWithPosition(req, res, next) {
    try {
      const companyAttribute = generateCompanyAttribute()
      const company = await CompanyModel.createCompany(companyAttribute);
      const amountOfPosition = randomInt(3, 6);
      if (company.length) {
        const company_id = company[0].insertId;
        const promiseOfPosition = []
        for (let i = 1; i <= amountOfPosition; i++) {
          promiseOfPosition.push(PositionModel.createPosition(generatePositionAttribute(company_id)));
        }
        const position = await Promise.all(promiseOfPosition)
        return res.json({
          company,
          position
        })
      }
      return res.json(company);
    } catch(err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
