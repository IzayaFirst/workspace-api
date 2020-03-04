import Express from 'express';
import LanguageHandler from '../handler/language';

const Router = Express.Router()

Router.get('/', LanguageHandler.getLanguages);
Router.post('/generate', LanguageHandler.initialLanguage);

export default Router;
