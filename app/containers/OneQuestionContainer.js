import { connect } from 'react-redux'
import { loadOneQuestion, loadQuestionToAnswer } from '../action-creators'
import OneQuestion from '../components/OneQuestion'

const mapStateToProps = function(state) {
	return {
		question: state.oneQuestion,
		questionStatus: state.questionStatus
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		loadQuestion: function () {
			const questionId = ownProps.params.questionId;
			const thunk = loadOneQuestion(questionId);
			dispatch(thunk)
		},
		answerQuestion: function() {
			const questionId = ownProps.params.questionId;
			const thunk = loadQuestionToAnswer(questionId)
			dispatch(thunk)
		}

	}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
const OneQuestionContainer = componentCreator(OneQuestion);
export default OneQuestionContainer;