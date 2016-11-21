import { connect } from 'react-redux'
import { loadQsAndAs } from '../action-creators'
import AllQuestions from '../components/AllQuestions'
import ContinuePlaying from '../components/ContinuePlaying'

const mapStateToProps = function(state) {
	return {
		//this state.allQuestions is named after whatever we link our combined reducer to
		allQsandAs: state.allQuestions,
		questionStatus: state.questionStatus
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		onLoadQuestions: function() {
			const thunk = loadQsAndAs();
			dispatch(thunk);
		}
	}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const ContinuePlayingContainer = componentCreator(ContinuePlaying);
export default ContinuePlayingContainer;