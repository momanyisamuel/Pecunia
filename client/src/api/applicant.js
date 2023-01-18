import axios from "axios";
import { authHeader } from "../helpers/authHeader";

// https://cdfreg.herokuapp.com/
// http://localhost:4000/
export default axios.create({
  baseURL: "http://localhost:4000/",
  headers: authHeader(),
})