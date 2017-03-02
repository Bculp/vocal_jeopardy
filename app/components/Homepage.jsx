import React from 'react'
import annyang from '../../public/annyang_source_code'
import { browserHistory } from 'react-router'
function goToQuestions() {
	browserHistory.push('/questions')
}

let STARTGAME = function() {
	goToQuestions()
}

function goToContinuePlaying() {
	browserHistory.push('/continue')
}

let CONTINUEPLAYING = function() {
	goToContinuePlaying()
}
annyang.addCommands({
	'Start game': STARTGAME,
	'Continue playing' : CONTINUEPLAYING
})
annyang.start()
annyang.debug()

const Homepage = function() {
	return (
		<div className='homepage'>
			<h1>Welcome to Jeopardy!</h1>
			<div className='flexbox-row'>
				<button className='waves-effect waves-light btn' onClick={goToQuestions}>Start Game</button>
				<button className = 'waves-effect waves-light btn rightBtn' onClick={goToContinuePlaying}>Continue Playing</button>
			</div>
		</div>
	)
}

export default Homepage;