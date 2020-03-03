import express from 'express';
import http from 'http';
import BodyParser from 'body-parser';
import {PORT} from '../helpers/const'
import CandidateRoute from '../route/candidate';

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

app.use("*", (req, res) => {
     return res.send('Hello world');
})