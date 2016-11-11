'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import AllQuestions from './components/AllQuestions'
import OneQuestion from './components/OneQuestion'


// const ExampleApp = connect(
//   ({ auth }) => ({ user: auth })
// ) (
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI/> : <Login/>}
//       </nav> 
//       {children}
//     </div>
// )

// <Provider store={store}>
        // <IndexRedirect to="/" />

render (
  
    <Router history={browserHistory}>
      <Route path="/" component={AllQuestions}/>
        <Route path="/question" component={OneQuestion} />
    </Router>,
  document.getElementById('main')
)

  // </Provider>,