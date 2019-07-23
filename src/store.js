import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from './reducers/dogList'
// use the combined (index.js) reducer instead of one...
// ...import reducer from './reducers/index'...
// the shorthand for the previous line » import reducer from './reducers' 
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
)

const store = createStore(reducer, enhancer)

export default store