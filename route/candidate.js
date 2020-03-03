import Express from 'express';
import CandidateHandler from '../handler/candidate';

const Router = Express.Router()

Router.post('/', CandidateHandler.createCandidate);

export default Router;
