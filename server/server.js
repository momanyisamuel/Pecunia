import express from "express";
import cors from "cors";
import { connect } from "./utils/db";
import userRouter from "./resources/user/user.router";
import applicantRouter from "./resources/applicant/applicant.router";
import programmeRouter from "./resources/Programme/programme.router"
import { signin, signup, protect } from "./utils/auth";
import { upload } from "./resources/applicant/applicant.controller";
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

//test db connection
(async () => {
  await connect();
})();

app.use(cors());
app.use(express.json());

app.post("/signin", signin);
app.post("/signup", signup);

app.use("/api", protect);
app.use("/api/user", userRouter);
app.use("/api/applicant", applicantRouter);
app.use("/api/programme", programmeRouter);

app.listen(PORT, () => console.log("Server Started"));