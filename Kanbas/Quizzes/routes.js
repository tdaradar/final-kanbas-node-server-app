import * as QuizDao from "./dao.js";
import * as QuestionDao from "../Questions/dao.js"
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

  // Questions
  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const questions = await QuestionDao.findQuestionsForQuiz(quizId);
    res.json(questions);
  });
  app.post("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const question = {
      ...req.body,
      quiz: quizId,
    };
    const newQuestion = await QuestionDao.createQuestion(question);
    res.send(newQuestion);
  });

  // Answers
  app.post("/api/quizzes/:quizId/answers", async (req, res) => {
    const { quizId } = req.params;
    const { userId, answers } = req.body;
    const newAnswer = {
      userId,
      quizId,
      answers
    };
    const createdAnswer = await AnswerDao.createAnswer(newAnswer);
    res.status(201).json(createdAnswer);
  });

  app.get("/api/quizzes/:quizId/answers", async (req, res) => {
    const { quizId } = req.params;
    const answers = await AnswerDao.getAnswersByQuizId(quizId);
    res.json(answers);
  });

  app.get("/api/quizzes/:quizId/answers/:userId", async (req, res) => {
    const { quizId, userId } = req.params;
    const answers = await AnswerDao.getAnswersByQuizIdAndUserId(quizId, userId);
    res.json(answers);
  });

  app.put("/api/quizzes/:quizId/answers/:answerId", async (req, res) => {
    const { answerId } = req.params;
    const updatedData = req.body;
    const updatedAnswer = await AnswerDao.updateAnswer(answerId, updatedData);
    res.json(updatedAnswer);
  });

  app.delete("/api/quizzes/:quizId/answers/:answerId", async (req, res) => {
    const { answerId } = req.params;
    const status = await AnswerDao.deleteAnswer(answerId);
    res.send(status);
  });

}