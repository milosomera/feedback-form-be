import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    votes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Vote",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);
export default Feedback;
