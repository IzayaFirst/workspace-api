import Express from "express";
import CandidateHandler from "../handler/candidate";

const Router = Express.Router();

Router.post("/", CandidateHandler.createCandidate);
Router.get("/profile", CandidateHandler.getProfile);
Router.get("/generateCandidate", CandidateHandler.generateCandidate);

export default Router;
