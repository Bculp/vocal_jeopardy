const Sequelize = require('sequelize');
const db = require('../index');
const Question = db.define("question", {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	category: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	pointValue: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
})

module.exports = Question;