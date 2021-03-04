import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import resultReducer from "./reducer"


const allReducers = combineReducers({
    results: resultReducer
  });

let store = createStore(allReducers, applyMiddleware(thunk));

export default store;
  