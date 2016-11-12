//NOT USING YET
const annyang = require('../public/annyang_source_code');
import { browserHistory } from 'react-router'

const axios = require('axios');

const allData = {arr: []};

axios.get('/api/questions')
.then(res => res.data)
.then(arrOfQs => {
	allData[arr] = arrOfQs
})
.catch(err => console.log(err))

console.log('allData', allData);

let showCategoryFn = function(questionId) {
	browserHistory.push(`/question/:${questionId}`)
}
let key = '', value = '', obj = {key: value};
console.log('allData.arr', allData[arr])

// allData.arr.forEach(question => (
// 	console.log('obj before', obj)
// 	// annyang.addCommands({`${question.title}${question.pointValue}` : showCategoryFn(question.id)})
// 	key = `${question.title}${question.pointValue}`
// 	value = showCategoryFn(question.id)
// 	console.log("obj after", obj)
// 	annyang.addCommands(obj)
// ))





// let testFn = function() {
// 	console.log('this totally works')
// }

// let changeComponent = {'question': showCategoryFn};
// let command3 = {'macbook' : testFn};
// annyang.addCommands(changeComponent)
// annyang.addCommands(command3)

// module.exports = annyang; 