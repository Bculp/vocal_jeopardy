import React from 'react'
import { browserHistory } from 'react'
import PointRows from './PointRows'

const AllQuestions = function() {

//pull in annyang
const annyang = require('../../public/annyang_source_code');


// console.log('all questions props', props)

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

//need pts to be in own boxes below categories

//**==MOVED PROPS TO POINTROWS - JUST RENDERED THIS STATICALLY NOW==**//

			annyang.start()
			annyang.debug()
let tempClassName = ''
	return (
		
			<div className='row'>
				<div className='col s1 allQ category'>
					<h3>MOVIES</h3>
				</div>
				<div className='col s1 allQ category'>
					<h3>SPORTS</h3>
				</div>
				<div className='col s1 allQ category'>
					<h3>COL SPORTS</h3>
				</div>
				<div className='col s1 allQ category'>
					<h3>SCIENCE</h3>
				</div>
				<div className='col s1 allQ category'>
					<h3>JEOPARDY</h3>
				</div>
				<div className='col s1 allQ category'>
					<h3>PLACES</h3>
				</div>
			</div>
		
	)
}

export default AllQuestions;