import Comment from "../models/Comment.js";
import Feedback from "../models/Feedback.js";

const allComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.send(comments);
  } catch (err) {
    res.status(400);
    res.send(err);
  }
};

const addComment = async (req, res) => {
  try {
    const { user, text, feedback_id } = req.body;
    const comment = new Comment({
      user,
      text,
      feedback_id,
    });
    await comment.save();
    const feedback = await Feedback.findById(feedback_id);
    feedback.comments.push(comment._id);
    await feedback.save();
    res.send(comment);
  } catch (err) {
    res.send(err);
  }
};

export { addComment, allComments };
