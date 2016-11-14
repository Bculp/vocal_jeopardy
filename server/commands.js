//NOT USING YET
const annyang = require('../public/annyang_source_code');
import { browserHistory } from 'react-router'
import React from 'react'

let obj = {arrOfCommands: []};
let test = [];

const Commands = function(props) {
	// console.log('inside commands and props', props)

	let MOVIES100 = function() {
		browserHistory.push('/question/1')
	}

	let MOVIES100ANSWER = function() {
		// let elArr = document.getElementsByClassName('MOVIES100')
		// for (var i = 0; i < elArr.length; i ++) {
		// 	elArr[i].className += 'answered'
		// }
		// console.log('got it')
		browserHistory.push('/answer/5')
		// browserHistory.push('/')
	}

	let MOVIES500 = function() {
		browserHistory.push('/question/5')
	}

	let MOVIES500ANSWER = function() {
		// let elArr = document.getElementsByClassName("PLACES200")
		// for (var i = 0; i < elArr.length; i ++) {
		// 	elArr[i].className += 'answered'
		// }
		// browserHistory.push('/')
		browserHistory.push('/answer/1')
	}

	let SPORTS100 = function() {
		browserHistory.push('/question/6')
	}

	let SPORTS100ANSWER = function() {
		// let elArr = document.getElementsByClassName("PLACES200")
		// for (var i = 0; i < elArr.length; i ++) {
		// 	elArr[i].className += 'answered'
		// }
		// browserHistory.push('/')
		browserHistory.push('/answer/6')
	}

	let COLLEGESPORTS100 = function() {
		browserHistory.push('/question/11')
	}

	let COLLEGESPORTS100ANSWER = function() {
		// let elArr = document.getElementsByClassName("PLACES200")
		// for (var i = 0; i < elArr.length; i ++) {
		// 	elArr[i].className += 'answered'
		// }
		// browserHistory.push('/')
		browserHistory.push('/answer/11')
	}

	let SCIENCE100 = function() {
		browserHistory.push('/question/16')
	}

	let SCIENCE100ANSWER = function() {
		// let elArr = document.getElementsByClassName("PLACES200")
		// for (var i = 0; i < elArr.length; i ++) {
		// 	elArr[i].className += 'answered'
		// }
		// browserHistory.push('/')
		browserHistory.push('/answer/16')
	}

	let JEOPARDY100 = function() {
		browserHistory.push('/question/21')
	}

	let JEOPARDY100ANSWER = function() {
		// let elArr = document.getElementsByClassName("PLACES200")
		// for (var i = 0; i < elArr.length; i ++) {
		// 	elArr[i].className += 'answered'
		// }
		// browserHistory.push('/')
		browserHistory.push('/answer/21')
	}

	let PLACES100 = function() {
		browserHistory.push('/question/26')
	}

	let PLACES100ANSWER = function() {
		// let elArr = document.getElementsByClassName("PLACES200")
		// for (var i = 0; i < elArr.length; i ++) {
		// 	elArr[i].className += 'answered'
		// }
		//pull off dispatchToProps and call it
		//need to get questionId
		// let questionId = document.getElementById('7')
		// console.log('questionId in command.js is', questionId)

		// props.changeQuestionStatus('7')

		// browserHistory.push('/')
		browserHistory.push('/answer/26')
	}

	let NEXTQUESTION = function() {
		browserHistory.push('/questions')
	}
	// test.push('testlkasjdfl')
	// obj[arrOfCommands] = [ENTERTAINMENT500, ENTERTAINMENT500ANSWER,ENTERTAINMENT200,
	// SPORTS300, COLLEGESPORTS100, SCIENCE200, JEOPARDY400, PLACES200, PLACES200ANSWER]

	annyang.addCommands({
		'MOVIES 100' : MOVIES100,
		'Who is *Heath Ledger' : MOVIES100ANSWER,
		'MOVIES 500' : MOVIES500,
		'Who is *Gal Gadot' : MOVIES500ANSWER,
		'SPORTS 100' : SPORTS100,
		'COLLEGE SPORTS 100' : COLLEGESPORTS100,
		'SCIENCE 100' : SCIENCE100,
		'JEOPARDY 100' : JEOPARDY100,
		'PLACES 100' : PLACES100,
		'What is *New York City' : PLACES100ANSWER,
		'Next Question' : NEXTQUESTION
	})

	// return annyang;
	// console.log('hello')
	// console.log('inside annyang', annyang)
	// return annyang;
}

//need to call this above fn to actually add commands
Commands();
// console.log('this is annyang', annyang)
// console.log('arrOfCommands', test)
module.exports = Commands;

