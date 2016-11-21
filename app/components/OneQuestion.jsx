import React from 'react';
const annyang = require('../../public/annyang_source_code');
const Commands = require('../../server/commands');

const OneQuestionComponent = function(props) {

	annyang.start()
	annyang.debug()

	return ( 
		<div className=''>
			<div className="z-depth-5 oneQ">
				<p className={`qText ${props.question.category}${props.question.pointValue}`} id={props.question.id}>{props.question.title}</p>
				{props.questionStatus.map(obj => (
					obj[props.question.id] === undefined ? props.answerQuestion(props.question.id): console.log('obj[props.question.id]:', obj[props.question.id])
				))} 
			</div>
		</div>

	)
	
}

export default OneQuestionComponent;