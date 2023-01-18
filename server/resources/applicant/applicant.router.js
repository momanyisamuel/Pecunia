import { Router } from "express";
import controllers from "./applicant.controller";
import { upload } from "./applicant.controller";

const router = Router();
router.route("/").get(controllers.getMany).post(controllers.createOne);
router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);
router.route("/upload").post(upload)

export default router;