import express from "express";
import { addComment, allComments } from "../controllers/CommentController.js";
const router = express.Router();

router.get("/all", allComments);
router.post("/add", addComment);

export default router;
