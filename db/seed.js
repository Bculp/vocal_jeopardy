const db = require('./index');
const Question = require('./models/question');
const Answer = require('./models/answer');
const Promise = require('bluebird');

//attempt to seed via tp persistence method with multiple tables
const data = {
	question: [
		{title: "This actress played Wonder Woman in Batman vs Superman", category: "ENTERTAINMENT", pointValue: 500},
		{title: "This actor played the Joker in the the movie The Dark Knight", category: "ENTERTAINMENT", pointValue: 200},
		{title: "Michael Jordan played for this team in his prime", category: "SPORTS", pointValue: 300},
		{title: "The only 2 time heisman trophy winner", category: "SPORTS", pointValue: 100},
		{title: "The temperature at which water boils", category: "SCIENCE", pointValue: 200},
	],
	answer: [
		{title: "Who is Gal Gadot", questionId: 1},
		{title: "Who is Heather Ledger", questionId: 2},
		{title: "Who are The Chicago Bulls", questionId: 3},
		{title: "Who is Archie Griffin", questionId: 4},
		{title: "What is 112F or 100C", questionId: 5}
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


//bones seeding:

// const db = require('APP/db')

// const seedUsers = () => db.Promise.map([
//   {name: 'so many', email: 'god@example.com', password: '1234'},
//   {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
// ], user => db.model('users').create(user))

// db.didSync
//   .then(() => db.sync({force: true}))
//   .then(seedUsers)
//   .then(users => console.log(`Seeded ${users.length} users OK`))
//   .catch(error => console.error(error))    
//   .finally(() => db.close())
