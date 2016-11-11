const Sequelize = require('sequelize');
const db = require('../index');

const Answer = db.define('answer', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	}
})


module.exports = Answer;