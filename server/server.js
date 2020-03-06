import express from 'express';
import http from 'http';
import BodyParser from 'body-parser';
import {PORT} from '../helpers/const'
import CandidateRoute from '../route/candidate';
import LanguageRoute from '../route/language';
import CandidateLanguageRoute from '../route/candidate_languages';
import EducationRoute from '../route/education';
import SkillRoute from '../route/skill';
import WorkExperienceRoute from '../route/work_experience';

const app = express();

http.createServer(app).listen(3000, () => {
     console.log("server status : running");
     console.log(`run on port : ${PORT}`);
});
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
    extended: true
}));

app.use('/candidates', CandidateRoute);
app.use('/languages', LanguageRoute);
app.use('/candidates-languages', CandidateLanguageRoute);
app.use('/educations', EducationRoute);
app.use('/skills', SkillRoute);
app.use('/work-experiences', WorkExperienceRoute);

app.use("*", (req, res) => {
     return res.send('Hello world');
})