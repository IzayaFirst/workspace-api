import Express from "express";
import CompanyHandler from "../handler/company";
import PositionHandler from '../handler/position';

const Router = Express.Router();

Router.get("/", PositionHandler.getAllJob)
Router.get("/findById", PositionHandler.getJobPositionById)
Router.get("/apply", PositionHandler.applyPosition)

Router.get("/whoApply", PositionHandler.getWhoApplyPosition)
Router.get("/applyWhat", PositionHandler.getPositionWhoApply)
Router.get('/addFeedback', PositionHandler.feedback)
Router.get('/getFeedback', PositionHandler.getFeedback)
Router.get('/getSummary', PositionHandler.getSummary)

export default Router;
