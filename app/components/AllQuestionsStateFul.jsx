import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
const annyang = require('../../server/commands');

//create command for each category&pointvalue that calls same function but with
//parameter based on category&pointValue to push to browserHistory
//also add the command to annyang

// let testing = {};
// let questionId = "";

// let showCategoryFn = function(questionId) {
// 	browserHistory.push(`/question/${questionId}`)
// }

export default class AllQuestions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {questions: []};
	}

	componentDidMount() {
		
		axios.get('/api/questions')
		.then(res => res.data)
		.then(arrOfQs => {
			this.setState({questions: arrOfQs})
			console.log("state", this.state.questions)

		})
		.catch(err => console.error(err))
	}
	
	render() {
		return (
				<div className='row'>
					{this.state.questions.map(question => (
						<div className='col s2' key={question.id} id={question.category + question.pointValue}>
							<h6>{question.title}</h6>


						</div>
						))
					}
					{annyang.start()}
				</div>
		)
	}
}
						//THIS CURRENTLY WORKS FOR ENTERTAINMENT500 BUT IT IMMEDIATELY CALLS THE FUNCTION//
							// {testing = `${question.category}${question.pointValue}`}
							// {console.log("testing", testing)}
							// {questionId = question.id}
							// {console.log('this should be 1 and incr', questionId)}
							// {testing[`${question.category}${question.pointValue}`] = showCategoryFn(questionId)}
			//-------------------
					// {this.props.children}
		// {let `command${question.id}` = {`${question.category}${question.pointValue}`: showCategoryFn({question.id})}}
							// {console.log("question category and point value", `${question.category}${question.pointValue}`)}
							// {console.log("showCategoryFn with id", showCategoryFn({question.id}))}