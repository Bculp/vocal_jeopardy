import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
// import allQuestionsAndAnswersReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware))

// const store = createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware))

export default store

// Set the auth info at start
// store.dispatch(whoami()) 
