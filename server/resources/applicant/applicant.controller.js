import { crudControllers } from "../../utils/crud";
import { Applicant } from "./applicant.model";
import multer from "multer";
const fs = require('fs');
const maxSize = 2 * 1024 * 1024;

export const upload = async (req, res, next) => {
  try {
    await uploadFile(req, res, next);
    console.log(req.file);
    if (req.file === undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    res.status(200).send({
      message: "Uploaded the file successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: `Could not upload the file: ${err}`,
    });
  }
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdir('./uploads/',(err)=>{
        cb(null, './uploads/');
     });
  },
  filename: (req, file, cb) => {
    // console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).array("fileUrl");
  
export default crudControllers(Applicant);