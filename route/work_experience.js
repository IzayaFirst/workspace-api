import Express from "express";
import CandidateHandler from "../handler/candidate";

const Router = Express.Router();

Router.post("/", CandidateHandler.createWorkExperience);

export default Router;
