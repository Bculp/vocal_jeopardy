import React from 'react';
import axios from 'axios';

//setup outline for 1 component or 1 question then will just render one of these
//components for each question

export default class Question extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="categoryPointValuePassed from props">
				<h3>title from props</h3>
			</div>
		)
	}

}