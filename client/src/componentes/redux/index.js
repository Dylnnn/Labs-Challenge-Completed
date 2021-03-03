import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import resultReducer from "./reducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
    results: resultReducer
  });

let store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
  