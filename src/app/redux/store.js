import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {historyReducer} from '../redux/history/reducer';

const reducers = combineReducers({
  historyReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
