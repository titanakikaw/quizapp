import answerRoutes from "./answer.routes";
import authRoutes from "./auth.routes";
import historyRoutes from "./history.routes";
import questionRoutes from "./question.routes";
import userRoutes from "./user.routes";

export default class Routes {
  static initRoutes(app) {
    app.use("/history", historyRoutes);
    app.use("/user", userRoutes);
    app.use("/auth", authRoutes);
    app.use("/questions", questionRoutes);
    app.use("/answers", answerRoutes);
  }
}
