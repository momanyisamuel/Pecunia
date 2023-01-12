import mongoose from "mongoose";
import options from "../config/config.json";

export const connect = (url = options.production.dbUrl, opts = {}) => {
  console.log("DB Connection Established");

  try {
    return mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => console.log("connected")
    );
  } catch (error) {
    return console.log("could not connect");
  }
};