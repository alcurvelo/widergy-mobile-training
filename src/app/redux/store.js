import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import historyR from './history/reducer';

const reducers = combineReducers({
  historyR,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
