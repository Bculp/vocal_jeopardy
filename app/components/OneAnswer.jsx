import React from 'react';
const annyang = require('../../public/annyang_source_code');

//needs to have container that gets props from store
const OneAnswerComponent = function(props) {
console.log('props is:', props)
	annyang.start()
	annyang.debug()

	return ( 
		<div className=''>
			<div className="z-depth-5 oneQ">
				<p className={`qText ${props.question.category}${props.question.pointValue}`}>{props.question.answer === undefined ? '': props.question.answer.title}</p>
				{console.log('props.questionStatus is:', props.questionStatus)}
				{props.questionStatus.map(obj => (
					obj[props.question.id] === undefined ? props.answerQuestion(props.question.id): console.log('obj[props.question.id]:', obj[props.question.id])
				))} 
			</div>
		</div>

	)
	
}

export default OneAnswerComponent;