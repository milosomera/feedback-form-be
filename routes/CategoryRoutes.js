import express from "express";
import { allCategory, addCategory } from "../controllers/CategoryController.js";
const router = express.Router();

router.get("/all", allCategory);
router.post("/add", addCategory);

export default router;
