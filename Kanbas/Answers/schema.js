const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: { type: String, required: true },
  quizId: { type: String, required: true },
  answers: [{
    questionId: String,
    answer: String,
    isCorrect: Boolean
  }]
});

export default schema;