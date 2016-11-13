import { combineReducers } from 'redux'
import { RECEIVE_QUESTIONS_AND_ANSWERS, loadQsAndAs, 
	SELECT_QUESTION, loadOneQuestion, ANSWER_QUESTION, loadQuestionToAnswer} from '../action-creators';

function allQuestionsAndAnswersReducer (state = [], action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS_AND_ANSWERS: return action.receivedQuestions;
		default: return state;
	}
}

function oneQuestionReducer (state = {}, action) {
	switch(action.type) {
		case SELECT_QUESTION: return action.selectedQuestion;
		default: return state;
	}
}

function questionStatusReducer (state = 'unanswered', action) {
	switch(action.type) {
		case ANSWER_QUESTION: return 'answered';
		default: return state;
	}
}

// export default allQuestionsAndAnswersReducer;
//this will eventually be rootreducer for combined reducers

const rootReducer = combineReducers({
  allQuestions : allQuestionsAndAnswersReducer,
  oneQuestion : oneQuestionReducer,
  questionStatus: questionStatusReducer
})

export default rootReducer
