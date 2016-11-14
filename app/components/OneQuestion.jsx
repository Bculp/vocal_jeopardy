import React from 'react';
// const annyang = require('../../server/commands').annyang;
const annyang = require('../../public/annyang_source_code');

//checking to see what Commands is and it's the whole function..
const Commands = require('../../server/commands');
console.log('commands is', Commands)


// //setup outline for 1 component or 1 question then will just render one of these
// //components for each question

//how do i pass up ownprops aka questionId when dispatch action
//so i check state
//can't check this here though, must first run command and check if right answer. then can update it
//so in reality would run this one answer component!

const OneQuestionComponent = function(props) {
		//should be an obj
	//console.log('props', props.question)
	annyang.start()
	annyang.debug()

	return ( 
		<div className=''>
			<div className="z-depth-5 oneQ">
				<p className={`qText ${props.question.category}${props.question.pointValue}`} id={props.question.id}>{props.question.title}</p>
				{console.log('props.questionStatus is:', props.questionStatus)}
				{props.questionStatus.map(obj => (
					obj[props.question.id] === undefined ? props.answerQuestion(props.question.id): console.log('obj[props.question.id]:', obj[props.question.id])
				))} 
			</div>
		</div>

	)
	
}

export default OneQuestionComponent;