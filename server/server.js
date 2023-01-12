import express from "express";
import cors from "cors";
import { connect } from "./utils/db";
import userRouter from "./resources/user/user.router";
import medItemRouter from "./resources/medItem/medItem.router";
import { signin, signup, protect } from "./utils/auth";

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
// app.use("/api/user", userRouter);
// app.use("/api/medItem", medItemRouter);

app.listen(PORT, () => console.log("Server Started"));