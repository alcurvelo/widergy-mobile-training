import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {historyReducer} from '../redux/history/reducer';
import {authReducer} from '../redux/auth/reducer';

const reducers = combineReducers({
  historyReducer,
  authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
