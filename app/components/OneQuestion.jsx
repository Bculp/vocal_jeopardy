import React from 'react';

// //setup outline for 1 component or 1 question then will just render one of these
// //components for each question

const OneQuestionComponent = function(props) {
		//should be an obj
	//console.log('props', props.question)
	return ( 
		<div className=''>
			<div className='z-depth-5 oneQ'>
				<p className='qText'>{props.question.title}</p> 
			</div>
		</div>

	)
	
}

export default OneQuestionComponent;