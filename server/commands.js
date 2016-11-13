//NOT USING YET
const annyang = require('../public/annyang_source_code');
import { browserHistory } from 'react-router'

let obj = {arrOfCommands: []};
let test = [];

const Commands = function(props) {
	console.log('inside commands and props', props)

	let ENTERTAINMENT500 = function() {
		browserHistory.push('/question/1')
	}

	let ENTERTAINMENT500ANSWER = function() {
		let elArr = document.getElementsByClassName('ENTERTAINMENT500')
		for (var i = 0; i < elArr.length; i ++) {
			elArr[i].className += 'answered'
		}
		browserHistory.push('/')
	}

	let ENTERTAINMENT200 = function() {
		browserHistory.push('/question/2')
	}

	let ENTERTAINMENT200ANSWER = function() {
		let elArr = document.getElementsByClassName("PLACES200")
		for (var i = 0; i < elArr.length; i ++) {
			elArr[i].className += 'answered'
		}
		browserHistory.push('/')
	}

	let SPORTS300 = function() {
		browserHistory.push('/question/3')
	}

	let SPORTS300ANSWER = function() {
		let elArr = document.getElementsByClassName("PLACES200")
		for (var i = 0; i < elArr.length; i ++) {
			elArr[i].className += 'answered'
		}
		browserHistory.push('/')
	}

	let COLLEGESPORTS100 = function() {
		browserHistory.push('/question/4')
	}

	let COLLEGESPORTS100ANSWER = function() {
		let elArr = document.getElementsByClassName("PLACES200")
		for (var i = 0; i < elArr.length; i ++) {
			elArr[i].className += 'answered'
		}
		browserHistory.push('/')
	}

	let SCIENCE200 = function() {
		browserHistory.push('/question/5')
	}

	let SCIENCE200ANSWER = function() {
		let elArr = document.getElementsByClassName("PLACES200")
		for (var i = 0; i < elArr.length; i ++) {
			elArr[i].className += 'answered'
		}
		browserHistory.push('/')
	}

	let JEOPARDY400 = function() {
		browserHistory.push('/question/6')
	}

	let JEOPARDY400ANSWER = function() {
		let elArr = document.getElementsByClassName("PLACES200")
		for (var i = 0; i < elArr.length; i ++) {
			elArr[i].className += 'answered'
		}
		browserHistory.push('/')
	}

	let PLACES200 = function() {
		browserHistory.push('/question/7')
	}

	let PLACES200ANSWER = function() {
		// let elArr = document.getElementsByClassName("PLACES200")
		// for (var i = 0; i < elArr.length; i ++) {
		// 	elArr[i].className += 'answered'
		// }
		//pull off dispatchToProps and call it
		//need to get questionId
		// let questionId = document.getElementById('7')
		// console.log('questionId in command.js is', questionId)
		props.changeQuestionStatus('7')

		browserHistory.push('/')
	}
	// test.push('testlkasjdfl')
	// obj[arrOfCommands] = [ENTERTAINMENT500, ENTERTAINMENT500ANSWER,ENTERTAINMENT200,
	// SPORTS300, COLLEGESPORTS100, SCIENCE200, JEOPARDY400, PLACES200, PLACES200ANSWER]

	annyang.addCommands({
		'ENTERTAINMENT 500' : ENTERTAINMENT500,
		'Who is *Gal Gadot' : ENTERTAINMENT500ANSWER,
		'ENTERTAINMENT 200' : ENTERTAINMENT200,
		'SPORTS 300' : SPORTS300,
		'COLLEGESPORTS 100' : COLLEGESPORTS100,
		'SCIENCE 200' : SCIENCE200,
		'JEOPARDY 400' : JEOPARDY400,
		'LOCATION 200' : PLACES200,
		'New York City' : PLACES200ANSWER
	})
	return annyang;
	// console.log('hello')
	// console.log('inside annyang', annyang)
	// return annyang;
}

//need to call this above fn to actually add commands
Commands();
console.log('this is annyang', annyang)
console.log('arrOfCommands', test)
module.exports = {Commands, annyang};










