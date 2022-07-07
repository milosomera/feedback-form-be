import Comment from "../models/Comment.js";
import Feedback from "../models/Feedback.js";

const allComments = (req, res) => {
  console.log("Comment route test.");
  res.send("Comment route test.");
};

// req.body.feedback === feedback._id
const addComment = (req, res) => {
  const { user, text, feedback } = req.body;
  let comment = new Comment();
  comment.user = user;
  comment.text = text;
  comment.feedback = feedback;
  comment.save().then((comment) => {
    Feedback.findById(feedback).then((feedback) => {
      feedback.comments.push(comment._id);
      feedback.save();
      res.send(comment);
    });
  });
};

export { allComments, addComment };
