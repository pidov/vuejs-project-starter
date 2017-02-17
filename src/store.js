import Vue from 'vue'
import Revue from 'revue'
import {createStore, applyMiddleware, bindActionCreators} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import actionsCreators from './actions'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

const reduxStore = createStoreWithMiddleware(reducer)
const actions = bindActionCreators(actionsCreators, reduxStore.dispatch)

const store = new Revue(Vue, reduxStore, actions)

if (__DEV__) {
  global.store = store
}

export default store
