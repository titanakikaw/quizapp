import express from "express";
import verifyToken from "../middlewares/verifyToken";
const Questions = require("../schema/questions.scheme");
const db = require("../db/conn");
const questionRoutes = express.Router();

questionRoutes.get("/", verifyToken, async (req, res) => {
  try {
    const response = await Questions.find({});
    if (response) {
      const newReponse = response.reduce((p, c) => {
        const newObj = {
          id: c.id,
          text: c.text,
          type: c.type,
          score: c.score,
          choices: c.choices,
        };
        p.push(newObj);
        return p;
      }, []);
      res.status(200).json(newReponse);
    }
  } catch (error) {
    console.log(error.message);
  }
});
export default questionRoutes;
