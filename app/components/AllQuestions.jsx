import React from 'react'
import { browserHistory } from 'react'

const AllQuestions = function(props) {

//pull in annyang
// const annyang = require('../../public/annyang_source_code');
const annyang = require('../../server/commands')


//attempt to loop for multiple commands - problem is the fn is called immediately
//instead of waiting for command to call it because it's accepting a parameter
//going to hardcode commands for now instead
// let showCategoryFn = function(questionId) {
// 	// browserHistory.push(`/question/:${questionId}`)
// 	if (shouldRun) {
// 		console.log("this would normally be pushing to browserhistory")
// 	}
// 	else {
// 		console.log('didnt run')
// 	}
// }

// function appendCommand(obj) {
// 	console.log('should be obj', obj)
// 	annyang.addCommands(obj)
// }

// function notYet(questionId,shouldRun) {
// 	console.log('inside run yet', questionId)
// 	if (shouldRun === undefined) {
// 		showCategoryFn(questionId)
// 	}
// }

// //key here is the command string and the value is the function to call for the command
// //so 'entertainment500', showCategoryFn(questionId)
// function createObj(key, value, questionId) {
// 	console.log('key:', key, 'value:', value)
// 	let tempObj = {}
// 	tempObj[key]= value(questionId,false);
// 	console.log('tempObj', tempObj)
// 	annyang.addCommands(tempObj)
// }

// props.allQsandAs.map(function(question) {
// 	createObj(`${question.category}${question.pointValue}`, notYet, question.id)
// })

		annyang.start()

	return (
		// props.allQsandAs.map(question => (
		// 	<div className='col s2' key={question.id} id={question.category + question.pointValue}>
		// 		<h6>{question.title}</h6>
		// 	</div>
		// ))
		// annyang.start()
		<h3>TESTING</h3>
	)
}

export default AllQuestions;
			// {this.state.questions.map(question => (
			// 	<div className='col s2' key={question.id} id={question.category + question.pointValue}>
			// 		<h6>{question.title}</h6>


			// 	</div>
			// 	))
			// }
			// {annyang.start()}