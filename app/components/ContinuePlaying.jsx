import React from 'react';
import { browserHistory } from 'react-router'
const annyang = require('../../public/annyang_source_code');
import AllQuestions from './AllQuestions'
window.counter = 0;

const ContinuePlaying = function(props) {


	let newCheckCounter = function(id) {
		if (id === 1) {
			return ''
		}
		else if (id === 8) {
			return ''
		}
		else if (id === 30) {
			return ''
		}
		else if (id === 20) {
			return ''
		}
		else if (id === 15) {
			return ''
		}
		else if (id === 17) {
			return ''
		}
		else if (id === 7) {
			return ''
		}
		else if (id === 13) {
			return ''
		}
		else if (id === 12) {
			return ''
		}
		else if (id ===6) {
			return ''
		}
		else if (id===11) {
			return ''
		}
		else if (id===21) {
			return ''
		}
		else if (id===6) {
			return ''
		}
		else if (id===26) {
			return ''
		}
		else return ''
	}
	function GOBACK() {
		browserHistory.push('/')
	}
	annyang.addCommands({'go back' : GOBACK})
	annyang.start()
	annyang.debug()
	let p100 = [], p200 = [], p300 = [], p400 = [], p500 = [];
	props.allQsandAs.map(function(question) {
		if (question.pointValue === 100) p100.push(question)
		else if (question.pointValue === 200) p200.push(question)
		else if (question.pointValue === 300) p300.push(question)
		else if (question.pointValue === 400) p400.push(question)
		else if (question.pointValue === 500) p500.push(question)
	})
	return (
		<div>
		
		<AllQuestions />
		{/*POINT VALUE 100 ROW*/}
		<div className='row'>
			{p100.map(question => (
				<div className= "col s2 allQ pointVal" key={question.id}>
				{question.id === 1 ? question.pointValue = newCheckCounter(question.id) : ''}
				{question.id === 11 ? question.pointValue = newCheckCounter(question.id) : ''}
				{question.id === 21 ? question.pointValue = newCheckCounter(question.id) : ''}
				{question.id === 6 ? question.pointValue = newCheckCounter(question.id) : ''}
				{question.id === 26 ? question.pointValue = newCheckCounter(question.id) : ''}
					<p className= {`${question.category}${question.pointValue}`} id={`${question.id}`}>{question.pointValue}</p>
				</div>
			))}
		</div>
		{/*POINT VALUE 200 ROW*/}
		<div className='row'>
			{p200.map(question => (
				<div className= "col s2 allQ pointVal" key={question.id}>
				{question.id === 7 ? question.pointValue = newCheckCounter(question.id) : ''}
				{question.id === 17 ? question.pointValue = newCheckCounter(question.id) : ''}
				{question.id === 12 ? question.pointValue = newCheckCounter(question.id) : ''}
					<p className= {`${question.category}${question.pointValue}`} id={`${question.id}`}>{question.pointValue}</p>
				</div>
			))}
		</div>
		{/*POINT VALUE 300 ROW*/}
		<div className='row'>
			{p300.map(question => (
				<div className= "col s2 allQ pointVal" key={question.id}>
				{question.id === 8 ? question.pointValue = newCheckCounter(question.id) : ''}
				{question.id === 13 ? question.pointValue = newCheckCounter(question.id) : ''}
					<p className= {`${question.category}${question.pointValue}`} id={`${question.id}`}>{question.pointValue}</p>
				</div>
			))}
		</div>
		{/*POINT VALUE 400 ROW*/}
		<div className='row'>
			{p400.map(question => (
				<div className= "col s2 allQ pointVal" key={question.id}>
					<p className= {`${question.category}${question.pointValue}`} id={`${question.id}`}>{question.pointValue}</p>
				</div>
			))}
		</div>
		{/*POINT VALUE 500 ROW*/}
		<div className='row'>
			{p500.map(question => (
				<div className= "col s2 allQ pointVal" key={question.id}>
				{question.id === 30 ? question.pointValue = newCheckCounter(question.id) : ''}
				{question.id === 20 ? question.pointValue = newCheckCounter(question.id) : ''}
				{question.id === 15 ? question.pointValue = newCheckCounter(question.id) : ''}
					<p className= {`${question.category}${question.pointValue}`} id={`${question.id}`}>{question.pointValue}</p>
				</div>
			))}
		</div>
	</div>
	)
	
}

export default ContinuePlaying;