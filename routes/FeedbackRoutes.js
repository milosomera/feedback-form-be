import express from "express";
import {
  addFeedback,
  allFeedbacks,
} from "../controllers/FeedbackController.js";
const router = express.Router();

router.get("/all", allFeedbacks);
router.post("/add", addFeedback);

export default router;
