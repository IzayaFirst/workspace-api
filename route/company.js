import Express from "express";
import CompanyHandler from "../handler/company";

const Router = Express.Router();

Router.post("/", CompanyHandler.createCompany);
Router.get("/generateCompany", CompanyHandler.generateCompanyWithPosition);

export default Router;
