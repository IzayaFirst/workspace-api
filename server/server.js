import express from 'express';
import http from 'http';
import {PORT} from '../helpers/const'

const app = express();

http.createServer(app).listen(3000, () => {
     console.log("server status : running");
     console.log(`run on port : ${PORT}`);
});

app.use("*", (req, res) => {
     return res.send('Hello world');
})