import { combineReducers } from 'redux'
import { RECEIVE_QUESTIONS_AND_ANSWERS, loadQsAndAs, SELECT_QUESTION, loadOneQuestion} from '../action-creators';

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

// export default allQuestionsAndAnswersReducer;
//this will eventually be rootreducer for combined reducers

const rootReducer = combineReducers({
  allQuestions : allQuestionsAndAnswersReducer,
  oneQuestion : oneQuestionReducer
})

export default rootReducer
