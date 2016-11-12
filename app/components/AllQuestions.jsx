import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

const annyang = require('../../public/annyang_source_code');

let showCategoryFn = function() {
	browserHistory.push('/question')
}

let testFn = function() {
	console.log('this totally works')
}

let changeComponent = {'question': showCategoryFn};
let command3 = {'macbook' : testFn};
annyang.addCommands(changeComponent)
annyang.addCommands(command3)


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
						<div className='col s2' key={question.id}>
							<h5>{question.title}</h5>
						</div>
						))
					}
					{annyang.start()}
				</div>
		)
	}
}
			
					// {this.props.children}