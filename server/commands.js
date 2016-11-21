import { browserHistory } from 'react-router'
import React from 'react'
const annyang = require('../public/annyang_source_code');

const Commands = function(props) {

	let MOVIES100 = function() {
		browserHistory.push('/question/1')
	}

	let MOVIES100ANSWER = function() {
		browserHistory.push('/answer/1')
	}

	let MOVIES200 = function() {
		browserHistory.push('/question/2')
	}

	let MOVIES200ANSWER = function() {
		browserHistory.push('/answer/2')
	}

	let SPORTS100 = function() {
		browserHistory.push('/question/6')
	}

	let SPORTS100ANSWER = function() {
		browserHistory.push('/answer/6')
	}

	let COLLEGESPORTS100 = function() {
		browserHistory.push('/question/11')
	}

	let COLLEGESPORTS100ANSWER = function() {
		browserHistory.push('/answer/11')
	}

	let SCIENCE100 = function() {
		browserHistory.push('/question/16')
	}

	let SCIENCE100ANSWER = function() {
		browserHistory.push('/answer/16')
	}

	let JEOPARDY100 = function() {
		browserHistory.push('/question/21')
	}

	let JEOPARDY100ANSWER = function() {
		browserHistory.push('/answer/21')
	}

	let PLACES100 = function() {
		browserHistory.push('/question/26')
	}

	let PLACES100ANSWER = function() {
		browserHistory.push('/answer/26')
	}

	let NEXTQUESTION = function() {
		browserHistory.push('/questions')
	}

	let PLACES200 = function() {
		browserHistory.push('/question/27')
	}

	let PLACES200ANSWER = function() {
		browserHistory.push('/answer/27')
	}

	let MOVIES500 = function() {
		browserHistory.push('/question/5')
	}

	let MOVIES500ANSWER = function() {
		browserHistory.push('/answer/5')
	}

	annyang.addCommands({
		'MOVIES 100' : MOVIES100,
			'Who is *Heath Ledger' : MOVIES100ANSWER,
		'MOVIES 200' : MOVIES200,
			'Who is *Gal Gadot' : MOVIES200ANSWER,
		'MOVIES 500' : MOVIES500,
			'Who is Quentin Tarantino' : MOVIES500ANSWER,
		'SCIENCE 100' : SCIENCE100,
			'What is 212 degrees': SCIENCE100ANSWER,
			'What is 100 degress' : SCIENCE100ANSWER,
		'PLACES 100' : PLACES100,
			'What is *New York City' : PLACES100ANSWER,
		'Next Question' : NEXTQUESTION,
		'PLACES 200' : PLACES200,
			'What is Cincinnati' : PLACES200ANSWER,
		'COLLEGE SPORTS 400': COLLEGESPORTS100,
			'Who is Archie Griffin' : COLLEGESPORTS100ANSWER,
		'SPORTS 100' : SPORTS100,
			'Who are the Chicago Bulls': SPORTS100ANSWER

	})
}

//need to call this above fn to actually add commands
Commands();

module.exports = Commands;
