import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/UserRoutes.js";
import feedbackRoutes from "./routes/FeedbackRoutes.js";
import commentRoutes from "./routes/CommentRoute.js";
import categoryRoutes from "./routes/CategoryRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/users", userRoutes);
app.use("/feedbacks", feedbackRoutes);
app.use("/comments", commentRoutes);
app.use("/categories", categoryRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Feedback creator app");
});
