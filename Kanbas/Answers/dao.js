const Answer = require('./model');

class AnswerDAO {
  static async createAnswer(answerData) {
    const answer = new Answer(answerData);
    return await answer.save();
  }

  static async getAnswersByUserId(userId) {
    return await Answer.find({ userId });
  }

  static async getAnswersByQuizId(quizId) {
    return await Answer.find({ quizId });
  }

  static async updateAnswer(answerId, updatedData) {
    return await Answer.findByIdAndUpdate(answerId, updatedData, { new: true });
  }

  static async deleteAnswer(answerId) {
    return await Answer.findByIdAndDelete(answerId);
  }
}

module.exports = AnswerDAO;