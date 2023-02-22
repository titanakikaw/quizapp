import answerRoutes from "./answer.routes";
import authRoutes from "./auth.routes";
import questionRoutes from "./question.routes";

export default class Routes {
  static initRoutes(app) {
    app.use("/auth", authRoutes);
    app.use("/questions", questionRoutes);
    app.use("/answers", answerRoutes);
  }
}
