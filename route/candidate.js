import Express from "express";
import CandidateHandler from "../handler/candidate";

const Router = Express.Router();

Router.post("/", CandidateHandler.createCandidate);
Router.post("/profile", CandidateHandler.updateProfile);

export default Router;
