import React from 'react';
import { browserHistory } from 'react'
const annyang = require('../../public/annyang_source_code');
import AllQuestions from './AllQuestions'

const PointRows = function(props) {
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
				<div className= "col s2 allQ" key={question.id}>
					<p className= {`${question.category}${question.pointValue}`}>{`${question.category}${question.pointValue}`}</p>
					<p>100</p>
				</div>
			))}
		</div>
		{/*POINT VALUE 200 ROW*/}
		<div className='row'>
			{p200.map(question => (
				<div className= "col s2 allQ" key={question.id}>
					<p className= {`${question.category}${question.pointValue}`}>{`${question.category}${question.pointValue}`}</p>
					<p>200</p>
				</div>
			))}
		</div>
		{/*POINT VALUE 300 ROW*/}
		<div className='row'>
			{p300.map(question => (
				<div className= "col s2 allQ" key={question.id}>
					<p className= {`${question.category}${question.pointValue}`}>{`${question.category}${question.pointValue}`}</p>
					<p>300</p>
				</div>
			))}
		</div>
		{/*POINT VALUE 400 ROW*/}
		<div className='row'>
			{p400.map(question => (
				<div className= "col s2 allQ" key={question.id}>
					<p className= {`${question.category}${question.pointValue}`}>{`${question.category}${question.pointValue}`}</p>
					<p>400</p>
				</div>
			))}
		</div>
		{/*POINT VALUE 500 ROW*/}
		<div className='row'>
			{p500.map(question => (
				<div className= "col s2 allQ" key={question.id}>
					<p className= {`${question.category}${question.pointValue}`}>{`${question.category}${question.pointValue}`}</p>
					<p>500</p>
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