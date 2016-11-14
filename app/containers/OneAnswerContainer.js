import { connect } from 'react-redux'
import { loadOneQuestion, loadQuestionToAnswer } from '../action-creators'
import OneAnswerComponent from '../components/OneAnswer'

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
const OneAnswerContainer = componentCreator(OneAnswerComponent);
export default OneAnswerContainer;