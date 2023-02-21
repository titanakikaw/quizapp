import express from "express";
import { ObjectId } from "mongodb";
import verifyToken from "../middlewares/verifyToken";

const db = require("../db/conn");
const Answers = require("../schema/Answers.scheme");
const Question = require("../schema/questions.scheme");

const answerRoutes = express.Router();

answerRoutes.get("/history", verifyToken, async (req, res) => {
  try {
    const id = req.query.userId;
    const arrAns = await Answers.find({ userId: new ObjectId(id) });
    res.status(200).json(arrAns);
  } catch (error) {}
});

answerRoutes.post("/submitAnswer", verifyToken, async (req, res) => {
  try {
    const Questions = await Question.find({});
    const answers = req.body;
    let score = 0;
    const newArrofAns = answers.map((x) => {
      const matchQuestion = Questions.find((y) => y.id === x.questionId);
      if (matchQuestion.answer === x.answers) {
        score += matchQuestion.score;
        return { ...x, correct: true };
      } else {
        return { ...x, correct: false };
      }
    });
    const newObj = new Answers({
      userId: req.userId,
      answers: newArrofAns,
      score,
    });
    await newObj.save();
    res.status(200).json(newObj);
  } catch (error) {}
});

export default answerRoutes;
