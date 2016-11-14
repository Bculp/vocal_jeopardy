import React from 'react';
import { browserHistory } from 'react'
const annyang = require('../../public/annyang_source_code');
import AllQuestions from './AllQuestions'
window.counter = 0;

const PointRows = function(props) {

	// function checkCounter() {
	// 		// console.log('couterchec first layer', counter === 0)
	// 	// if (document.getElementsByClassName('MOVIES500') != null) {
	// 	// 	console.log('classes worked')
	// 	// 	console.log('class', document.getElementsByClassName('MOVIES500'))
	// 	// 	// document.getElementsByClassName('MOVIES500')[0].innerHTML = '';
	// 	// }
	// 	if (document.querySelector('MOVIES500') != null) {
	// 	document.querySelector('MOVIES500').innerHTML('')
	// }
	function newCheckCounter() {
		question.id === 1 && counter === 0 ? question.pointValue = '' : ''
		question.id === 5 && counter === 1 ? question.pointValue = '' : ''
		question.id === 26 && counter === 2 ? question.pointValue = '' : ''

	}

	// 	if (document.getElementById('1') != null) {
	// 		console.log('INSIDE ----IT WORKED')
	// 		// switch(counter) {
	// 		// 	case 0: console.log('YAAAAAAAAAAA')
	// 		// 		break;
	// 		// 	default: return;
	// 		// }
	// 		console.log('couterchec', counter === 0)
	// 		if (counter === 0) document.getElementById('1').innerHTML('');
	// 	}
	// 	else return;
	// }
	annyang.start()
	annyang.debug()
	let p100 = [], p200 = [], p300 = [], p400 = [], p500 = [];
	props.allQsandAs.map(function(question) {
		// console.log('ptvalue', question.pointValue)
		// switch(question.pointValue) {
		// 	case 100: p100.push(question);
		// 	case 200: p200.push(question);
		// 	case 300: p300.push(question);
		// 	case 400: p400.push(question);
		// 	case 500: p500.push(question);
		// 	default: console.log('none found!!!!!')
		// }
		if (question.pointValue === 100) p100.push(question)
		else if (question.pointValue === 200) p200.push(question)
		else if (question.pointValue === 300) p300.push(question)
		else if (question.pointValue === 400) p400.push(question)
		else if (question.pointValue === 500) p500.push(question)
	})
	// console.log('p100:', p100, 'p200:', p200, 'p300', p300,'p400', p400, 'p500', p500)
	return (
		<div>
		
		<AllQuestions />
		{/*POINT VALUE 100 ROW*/}
		<div className='row'>
			{p100.map(question => (
				<div className= "col s2 allQ pointVal" key={question.id}>
				{/*newCheckCounter()*/}
					<p className= {`${question.category}${question.pointValue}`} id={`${question.id}`}>{question.pointValue}</p>
				</div>
			))}
		</div>
		{/*POINT VALUE 200 ROW*/}
		<div className='row'>
			{p200.map(question => (
				<div className= "col s2 allQ pointVal" key={question.id}>
					<p className= {`${question.category}${question.pointValue}`} id={`${question.id}`}>{question.pointValue}</p>
				</div>
			))}
		</div>
		{/*POINT VALUE 300 ROW*/}
		<div className='row'>
			{p300.map(question => (
				<div className= "col s2 allQ pointVal" key={question.id}>
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
				{/*newCheckCounter()*/}
					<p className= {`${question.category}${question.pointValue}`} id={`${question.id}`}>{question.pointValue}</p>
				</div>
			))}
		</div>
	</div>
	)
	
}

export default PointRows;

// OLD WAY OF LOOPING OVER

// <div className='row'>
// 			{props.allQsandAs.map(question => (
// 				<div className= "col s2 allQ" key={question.id}>
// 					<p className= {`${question.category}${question.pointValue}`}>{question.category}</p>
// 					<div className='pts'>
// 						<p>100</p>
// 					</div>
// 				</div>
// 			))}
// 		</div>