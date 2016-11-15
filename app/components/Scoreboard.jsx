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

const Scoreboard = function() {
	return (
		<div className='row homepage'>
			<div className='col s2'></div>
			<div className='col s3 playerContainer player1'>
				<h3 className='head'>Player 1</h3>
					<p>100</p>
			</div>
			<div className='col s3 playerContainer'>
				<h3 className='head'>Player 2</h3>
					<p>200</p>
			</div>
			<div className='col s3 playerContainer'>
				<h3 className='head'>Player 3</h3>
					<p>300</p>
			</div>
		</div>
	)
}

export default Scoreboard;