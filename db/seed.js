const db = require('./db').db;
const Question = require('./models/question');
const Answer = require('./models/answer');
const Promise = require('bluebird');

//attempt to seed via tp persistence method with multiple tables
const data = {
	question: [
		{title: "This actor played the Joker in the the movie The Dark Knight", category: "ENTERTAINMENT", pointValue: 100},
		{title: "This actor played the Joker in the the movie The Dark Knight", category: "ENTERTAINMENT", pointValue: 200},
		{title: "This actor played the Joker in the the movie The Dark Knight", category: "ENTERTAINMENT", pointValue: 300},
		{title: "This actor played the Joker in the the movie The Dark Knight", category: "ENTERTAINMENT", pointValue: 400},
		{title: "This actress played Wonder Woman in Batman vs Superman", category: "ENTERTAINMENT", pointValue: 500},
		{title: "Michael Jordan played for this team in his prime", category: "SPORTS", pointValue: 100},
		{title: "Michael Jordan played for this team in his prime", category: "SPORTS", pointValue: 200},
		{title: "Michael Jordan played for this team in his prime", category: "SPORTS", pointValue: 300},
		{title: "Michael Jordan played for this team in his prime", category: "SPORTS", pointValue: 400},
		{title: "Michael Jordan played for this team in his prime", category: "SPORTS", pointValue: 500},
		{title: "The only 2 time heisman trophy winner", category: "COLLEGE SPORTS", pointValue: 100},
		{title: "The only 2 time heisman trophy winner", category: "COLLEGE SPORTS", pointValue: 200},
		{title: "The only 2 time heisman trophy winner", category: "COLLEGE SPORTS", pointValue: 300},
		{title: "The only 2 time heisman trophy winner", category: "COLLEGE SPORTS", pointValue: 400},
		{title: "The only 2 time heisman trophy winner", category: "COLLEGE SPORTS", pointValue: 500},
		{title: "The temperature at which water boils", category: "SCIENCE", pointValue: 100},
		{title: "The temperature at which water boils", category: "SCIENCE", pointValue: 200},
		{title: "The temperature at which water boils", category: "SCIENCE", pointValue: 300},
		{title: "The temperature at which water boils", category: "SCIENCE", pointValue: 400},
		{title: "The temperature at which water boils", category: "SCIENCE", pointValue: 500},
		{title: "Number of categories in Jeopardy", category: "JEOPARDY", pointValue: 100},
		{title: "Number of categories in Jeopardy", category: "JEOPARDY", pointValue: 200},
		{title: "Number of categories in Jeopardy", category: "JEOPARDY", pointValue: 300},
		{title: "Number of categories in Jeopardy", category: "JEOPARDY", pointValue: 400},
		{title: "Number of categories in Jeopardy", category: "JEOPARDY", pointValue: 500},
		{title: "The location of the Statue of Liberty", category: "PLACES", pointValue: 100},
		{title: "The location of the Statue of Liberty", category: "PLACES", pointValue: 200},
		{title: "The location of the Statue of Liberty", category: "PLACES", pointValue: 300},
		{title: "The location of the Statue of Liberty", category: "PLACES", pointValue: 400},
		{title: "The location of the Statue of Liberty", category: "PLACES", pointValue: 500},

	],
	answer: [
		{title: "Who is Gal Gadot", questionId: 1},
		{title: "Who is Gal Gadot", questionId: 2},
		{title: "Who is Gal Gadot", questionId: 3},
		{title: "Who is Gal Gadot", questionId: 4},
		{title: "Who is Heather Ledger", questionId: 5},
		{title: "Who are The Chicago Bulls", questionId: 6},
		{title: "Who are The Chicago Bulls", questionId: 7},
		{title: "Who are The Chicago Bulls", questionId: 8},
		{title: "Who are The Chicago Bulls", questionId: 9},
		{title: "Who are The Chicago Bulls", questionId: 10},
		{title: "Who is Archie Griffin", questionId: 11},
		{title: "Who is Archie Griffin", questionId: 12},
		{title: "Who is Archie Griffin", questionId: 13},
		{title: "Who is Archie Griffin", questionId: 14},
		{title: "Who is Archie Griffin", questionId: 15},
		{title: "What is 112F or 100C", questionId: 16},
		{title: "What is 112F or 100C", questionId: 17},
		{title: "What is 112F or 100C", questionId: 18},
		{title: "What is 112F or 100C", questionId: 19},
		{title: "What is 112F or 100C", questionId: 20},
		{title: "What is 112F or 100C", questionId: 21},
		{title: "What is 6", questionId: 22},
		{title: "What is 6", questionId: 23},
		{title: "What is 6", questionId: 24},
		{title: "What is 6", questionId: 25},
		{title: "What is 6", questionId: 26},
		{title: "What is 6", questionId: 27},
		{title: "Where is New York City", questionId: 28},
		{title: "Where is New York City", questionId: 29},
		{title: "Where is New York City", questionId: 30},
		{title: "Where is New York City", questionId: 31},
		{title: "Where is New York City", questionId: 32},
		{title: "Where is New York City", questionId: 33},

	]
};

db.sync({force: true})
.then(function() {
	console.log('Dropped old data, adding new data now');
	return Promise.map(Object.keys(data), function(name) {
		return Promise.map(data[name], function(item) {
			return db.model(name).create(item)
		})
	})
})
.catch((err) => console.error("THERE WAS A PROBLEM", err))
.finally(() => {db.close()
	console.log('Well done. Seeded well')
	return null;
});
