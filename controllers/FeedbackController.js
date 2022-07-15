import Feedback from "../models/Feedback.js";

const allFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find({})
    .sort({ createdAt: -1 })
    .populate("user")
    .populate("comments")
    .exec();
  res.send(feedbacks);
};

const addFeedback = async (req, res) => {
  const { user, text, label } = req.body;
  const feedback = new Feedback({
    user,
    text,
    label,
    comments: [],
  });
  await feedback.save();
  res.send(feedback);
};

export { allFeedbacks, addFeedback };
