import { connect } from 'react-redux'
import { loadQuestionToAnswer } from '../action-creators'
const Commands = require('../../server/commands').Commands

const mapStateToProps = function(state) {
	return {
		questionStatus: state.questionStatus
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		//loadAnswered question should check state above and if it's active
		//dispatch an actionCreator to make inactive
		//or doesn't have to check since only calling to make inactive

		// loadAnsweredQuestion: function() {
		// 	console.log('ownProps are:', ownProps)
		// 	const questionId = ownProps.params.questionId;
		// 	const thunk = loadQuestionToAnswer(questionId);
		// 	dispatch(thunk)
		// }
		// changeQuestionStatus: questionStatus === 'unanswered' ? dispatch(loadQuestionToAnswer()
		changeQuestionStatus: function() {
			const questionId = ownProps.params.questionId;
			const thunk = loadQuestionToAnswer(questionId)
			dispatch(thunk)

	}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const CommandsContainer = componentCreator(Commands);

export default CommandsContainer;