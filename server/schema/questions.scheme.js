import mongoose from "mongoose";

const QuestionScheme = new mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, required: true },
  score: { type: Number, required: true },
  answer: { type: String, required: true },
  choices: { type: Array, required: true },
});

const Questions = mongoose.model("questions", QuestionScheme);
module.exports = Questions;
