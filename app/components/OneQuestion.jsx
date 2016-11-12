import React from 'react';
import axios from 'axios';

let helloFunction = function() {
	alert('hello!!')
}
// // //annyang commands
let command = {'test': helloFunction};
annyang.addCommands(command)

annyang.start()

//setup outline for 1 component or 1 question then will just render one of these
//components for each question

export default class OneQuestion extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="categoryPointValuePassed from props">
				<h1>hello</h1>
				
					{console.log(annyang.isListening())}
					
					{console.log(annyang.isListening())}
					{console.log(annyang.isListening())}


				
			</div>
		)
	}

}



// let command = {'test': helloFunction};

// //annyang commands
// annyang.addCommands(command)
// annyang.start({autoRestart: false})
// annyang.isListening()