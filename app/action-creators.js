import axios from 'axios';
export const RECEIVE_QUESTIONS_AND_ANSWERS = 'RECEIVE_QUESTIONS_AND_ANSWERS';
export const SELECT_QUESTION = 'SELECT_QUESTION';

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

const selectQuestion = function(question) {
	return {
		type: SELECT_QUESTION,
		selectedQuestion: question
	}
}

export const loadOneQuestion = function(questionId) {
	return function(dispatch) {
		axios.get(`/api/questions/${questionId}`)
		.then(res => res.data)
		.then(question => {
			const action = selectQuestion(question)
			dispatch(action)
		})
		.catch(err => console.error(err))
	}
}