'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
// import AllQusestions from './components/AllQuestions'
import OneQuestion from './components/OneQuestion'
import AllQuestions from './components/AllQuestions'
import AllQuestionsContainer from './containers/AllQuestionsContainer'
import OneQuestionContainer from './containers/OneQuestionContainer'
        // <IndexRedirect to="/" />

//add onEnter to dispatch initial action
import { loadQsAndAs, loadOneQuestion, loadQuestionToAnswer } from './action-creators';

const onAllQuestionsEnter = function() {
	const thunk = loadQsAndAs();
	store.dispatch(thunk);
}

const onOneQuestionEnter = function(nextRouterState) {
	const questionId = nextRouterState.params.questionId
	const thunk = loadOneQuestion(questionId)
	store.dispatch(thunk);
}
//not calling since then nothing renders on hoempage
const answeredQuestionEnter = function(nextRouterState) {
	const questionId = nextRouterState.params.questionId
	const thunk = loadQuestionToAnswer(questionId)
	store.dispatch(thunk)
}

import CommandsContainer from './containers/CommandsContainer';

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AllQuestionsContainer} onEnter={onAllQuestionsEnter}/>
      <Route path="/test" component={CommandsContainer}/>
      <Route path="/question/:questionId" component={OneQuestionContainer} onEnter={onOneQuestionEnter}/>
    </Router>
   </Provider>,
  document.getElementById('main')
)
        // <Route path="/question/:questionId" component={OneQuestion} />