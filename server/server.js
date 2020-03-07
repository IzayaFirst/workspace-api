import express from "express";
import http from "http";
import BodyParser from "body-parser";
import cors from "cors";
import { PORT } from "../helpers/const";
import CandidateRoute from "../route/candidate";
import LanguageRoute from "../route/language";
import CandidateLanguageRoute from "../route/candidate_languages";
import EducationRoute from "../route/education";
import SkillRoute from "../route/skill";
import WorkExperienceRoute from "../route/work_experience";
import ArcheivementRoute from "../route/archeivement";
import CompanyRoute from "../route/company";

const app = express();
const whitelist = ["http://localhost:8080"];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

http.createServer(app).listen(3000, () => {
  console.log("server status : running");
  console.log(`run on port : ${PORT}`);
});
app.use(cors());
app.use(BodyParser.json());
app.use(
  BodyParser.urlencoded({
    extended: true
  })
);

app.use("/candidates", CandidateRoute);
app.use("/languages", LanguageRoute);
app.use("/candidates-languages", CandidateLanguageRoute);
app.use("/educations", EducationRoute);
app.use("/skills", SkillRoute);
app.use("/work-experiences", WorkExperienceRoute);
app.use("/archeivements", ArcheivementRoute);
app.use("/companies", CompanyRoute);

app.use("*", (req, res) => {
  return res.send("Hello world");
});
