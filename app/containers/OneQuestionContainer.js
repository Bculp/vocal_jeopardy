import { connect } from 'react-redux'
import { loadOneQuestion } from '../action-creators'
import OneQuestion from '../components/OneQuestion'

const mapStateToProps = function(state) {
	return {
		question: state.oneQuestion
	}
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		loadQuestion: function () {
			const questionId = ownProps.params.questionId;
			const thunk = loadOneQuestion(questionId);
			dispatch(thunk)
		}
	}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
const OneQuestionContainer = componentCreator(OneQuestion);
export default OneQuestionContainer;