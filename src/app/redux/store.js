import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

import {historyReducer} from '../redux/history/reducer';
import {authReducer} from '../redux/auth/reducer';
import Reactotron from '../config/Reactotron';

const reducers = combineReducers({
  historyReducer,
  authReducer,
});

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);
export default store;
