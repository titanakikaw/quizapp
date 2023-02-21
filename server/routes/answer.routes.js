import express from "express";
import verifyToken from "../middlewares/verifyToken";

const db = require("../db/conn");
const Answers = require("../schema/Answers.scheme");
const Question = require("../schema/questions.scheme");

const answerRoutes = express.Router();

answerRoutes.post("/submitAnswer", verifyToken, async (req, res) => {
  try {
    const answers = await req.body.map((x) => {
      const { answer } = Question.findById(x.questionId).exec();
      if (answer === x.answers) {
        return { ...x, correct: true };
      } else {
        return { ...x, correct: false };
      }
    });
    console.log(answers);
    const newObj = {
      userId: req.userId,
      answers,
    };
    // console.log(newObj);
  } catch (error) {}
});

export default answerRoutes;
