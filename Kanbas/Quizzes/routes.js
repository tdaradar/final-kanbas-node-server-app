import * as QuizDao from "./dao.js";
export default function QuizzesRoutes(app) {
 app.delete("/api/quizzes/:quizId", async (req, res) => {
   const { quizId } = req.params;
   const status = await QuizDao.deleteQuiz(quizId);
   res.send(status);
  });
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await QuizDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });

}