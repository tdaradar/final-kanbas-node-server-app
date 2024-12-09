import * as QuestionDao from "./dao.js";

export default function QuizzesRoutes(app) {

 app.delete("/api/questions/:questionId", async (req, res) => {
   const { questionId } = req.params;
   const status = await QuestionDao.deleteQuestion(questionId);
   res.send(status);
  });
  app.put("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    const status = await QuestionDao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  });
}