import React from 'react';
import axios from 'axios';

const annyang = require('../../public/annyang_source_code');

let helloFunction = function() {
	alert('hello!!')
}

let testFunction = function() {
	console.log('testing 1 2 3')
}
// // //annyang commands
let command = {'test': testFunction};
let command2 = {'hello': helloFunction}
annyang.addCommands(command)
annyang.addCommands(command2)


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
					{annyang.debug()}
					{annyang.start()}
					
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