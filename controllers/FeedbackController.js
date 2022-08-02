import Feedback from "../models/Feedback.js";

const allFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({})
      .sort({ createdAt: -1 })
      .populate("user")
      .populate("comments")
      .exec();
    res.send(feedbacks);
  } catch (err) {
    res.status(400);
    res.send(err);
  }
};

const addFeedback = async (req, res) => {
  try {
    const { user, text, label } = req.body;
    const feedback = new Feedback({
      user,
      text,
      label,
      comments: [],
    });
    await feedback.save();
    res.send(feedback);
  } catch (err) {
    res.send(err);
  }
};

export { allFeedbacks, addFeedback };
