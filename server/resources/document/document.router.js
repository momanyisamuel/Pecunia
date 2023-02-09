import { Document } from "./document.model";
import multer from "multer";
import { Router } from "express";

const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./files");
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); // continue with upload
  },
}).single("file");

router.post(
  "/upload",
  upload,
  async (req, res) => {
    try {
      const { title, description, user, programme } = req.body;
      const { path, mimetype } = req.file;
      const file = new Document({
        title,
        description,
        user,
        programme,
        file_path: path,
        file_mimetype: mimetype,
      });
      await file.save();
      res.send("file uploaded successfully.");
    } catch (error) {
      res.status(400).send("Error while uploading file. Try again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

router.get("/getAllFiles", async (req, res) => {
  try {
    const files = await Document.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send("Error while getting list of files. Try again later.");
  }
});

router.get("/download/:id", async (req, res) => {
  try {
    const file = await Document.findById(req.params.id);
    var filePath = file.file_path; // Or format the path using the `id` rest param
    var fileName = file.description; // The default name the browser will use
    res.download(filePath, fileName);
  } catch (error) {
    res.status(400).send("Error while downloading file. Try again later.");
  }
});

module.exports = router;
