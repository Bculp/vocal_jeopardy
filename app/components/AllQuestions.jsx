import React from 'react'

const AllQuestions = function(props) {
	return (
		<div className='row'>
			<h3>hello all questions component</h3>
		{console.log('props', props.allQsandAs)}
		</div>
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