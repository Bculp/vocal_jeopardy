//NOT USING YET
const annyang = require('../public/annyang_source_code');
import { browserHistory } from 'react-router'

// const axios = require('axios');

// const allData = {arr: []};

// axios.get('/api/questions')
// .then(res => res.data)
// .then(arrOfQs => {
// 	allData[arr] = arrOfQs
// })
// .catch(err => console.log(err))

// console.log('allData', allData);

// let showCategoryFn = function(questionId) {
// 	browserHistory.push(`/question/:${questionId}`)
// }
// let key = '', value = '', obj = {key: value};
// console.log('allData.arr', allData[arr])

let ENTERTAINMENT500 = function() {
	browserHistory.push('/question/1')
}

let ENTERTAINMENT200 = function() {
	browserHistory.push('/question/2')
}

let SPORTS300 = function() {
	browserHistory.push('/question/3')
}

let COLLEGESPORTS100 = function() {
	browserHistory.push('/question/4')
}

let SCIENCE200 = function() {
	browserHistory.push('/question/5')
}

let JEOPARDY400 = function() {
	browserHistory.push('/question/6')
}

let PLACES200 = function() {
	browserHistory.push('/question/7')
}

annyang.addCommands({
	'ENTERTAINMENT500' : ENTERTAINMENT500,
	'ENTERTAINMENT200' : ENTERTAINMENT200,
	'SPORTS300' : SPORTS300,
	'COLLEGESPORTS100' : COLLEGESPORTS100,
	'SCIENCE200' : SCIENCE200,
	'JEOPARDY400' : JEOPARDY400,
	'PLACES200' : PLACES200
})

module.exports = annyang;










