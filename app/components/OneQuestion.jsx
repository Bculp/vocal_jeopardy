import React from 'react';

// //setup outline for 1 component or 1 question then will just render one of these
// //components for each question

const OneQuestionComponent = function(props) {
		//should be an obj
	//console.log('props', props.question)
	return ( 
		<div className='row'>
			<div className='col s12'>
				<p>this is one question comp</p> 
			</div>
		</div>

	)
	
}

export default OneQuestionComponent;