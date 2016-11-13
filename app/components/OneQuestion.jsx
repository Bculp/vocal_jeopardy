import React from 'react';
// const annyang = require('../../server/commands').annyang;
const annyang = require('../../public/annyang_source_code');

//checking to see what Commands is and it's the whole function..
const Commands = require('../../server/commands');
console.log('commands is', Commands)


// //setup outline for 1 component or 1 question then will just render one of these
// //components for each question

const OneQuestionComponent = function(props) {
		//should be an obj
	//console.log('props', props.question)
	annyang.start()
	annyang.debug()

	return ( 
		<div className=''>
			<div className="z-depth-5 oneQ">
				<p className={`qText ${props.question.category}${props.question.pointValue}`} id={props.question.id}>{props.question.title}</p> 
			</div>
		</div>

	)
	
}

export default OneQuestionComponent;