import Vue from 'vue'
import Revue from 'revue'
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import * as actions from './actions/index'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

const reduxStore = createStoreWithMiddleware(reducer)
const store = new Revue(Vue, reduxStore, actions)

if (__DEV__) {
  global.store = store
}

export default store
