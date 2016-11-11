const Sequelize = require('sequelize');
const db = require('./index');
const Question = require('./models/question');
const Answer = require('./models/answer');

Question.hasOne(Answer);

module.exports = {db, Question, Answer};