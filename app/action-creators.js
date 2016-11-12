import axios from 'axios';
export const RECEIVE_QUESTIONS_AND_ANSWERS = 'RECEIVE_QUESTIONS_AND_ANSWERS';

const receiveQsAndAs = function(allQsandAs) {
	return {
		type: RECEIVE_QUESTIONS_AND_ANSWERS,
		receivedQuestions: allQsandAs
	}
}

export const loadQsAndAs = function() {
	return function(dispatch) {
		axios.get('/api/questions')
		.then(res => res.data)
		.then(allQsandAs => {
			const action = receiveQsAndAs(allQsandAs)
			dispatch(action)
		})
		.catch(err => console.error(err));
	}
}
