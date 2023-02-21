import mongoose from "mongoose";
const AnswersScheme = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "users" },
    answers: { type: Array, required: true },
    score: { type: Number, required: true },
  },
  { timestamps: true }
);

const Answers = mongoose.model("answers", AnswersScheme);
module.exports = Answers;
