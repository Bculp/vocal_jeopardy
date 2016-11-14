import React from 'react'
import annyang from '../../public/annyang_source_code'
import { browserHistory } from 'react-router'
function goToQuestions() {
	browserHistory.push('/questions')
}

let STARTGAME = function() {
	// browserHistory.push('/questions')
	goToQuestions()
}
annyang.addCommands({'Start game': STARTGAME})
annyang.start()
annyang.debug()

const Homepage = function() {
	return (
		<div className='row homepage'>
			<h1 className='col s12 title'>Welcome to Jeopardy!</h1>
			<button className='waves-effect waves-light btn' onClick={goToQuestions}>Start Game</button>
			<button className = 'waves-effect waves-light btn rightBtn'>Continue Playing</button>
		</div>
	)
}

export default Homepage;