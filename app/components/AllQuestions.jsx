import React from 'react';
import axios from 'axios';


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
				</div>
		)
	}
}
			
					// {this.props.children}