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

//changed this from str unanswered or answered to array so that it
//can be an arry of objs with key = questionId and value = answer status
function questionStatusReducer (state = [], action) {
	switch(action.type) {
		case ANSWER_QUESTION: return action.answeredQuestion;
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
