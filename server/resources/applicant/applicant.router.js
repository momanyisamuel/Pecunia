import { Router } from "express";
import controllers from "./applicant.controller";
import { getUserApplications } from "./applicant.controller";
import { upload } from "./applicant.controller";

const router = Router();
router.route("/").get(controllers.getMany).post(controllers.createOne);
router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);
router.route("/upload").post(upload)
router.route("/applications/:userId").get(getUserApplications)

export default router;