import Express from "express";
import CompanyHandler from "../handler/company";
import PositionHandler from '../handler/position';

const Router = Express.Router();

Router.get("/", PositionHandler.getAllJob)
Router.get("/findById", PositionHandler.getJobPositionById)
Router.get("/apply", PositionHandler.applyPosition)


export default Router;
