import Feedback from "../models/Feedback.js";

const allFeedbacks = (req, res) => {
  console.log("Feedback route test.");
  res.send("Feedback route test.");
};

const addFeedback = (req, res) => {
  const { user, text, label } = req.body;
  let feedback = new Feedback();
  feedback.user = user;
  feedback.text = text;
  feedback.label = label;
  feedback.comments = [];
  feedback.votes = [];
  feedback.save();
  res.send(feedback);
};

export { allFeedbacks, addFeedback };
