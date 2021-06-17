import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import historyR from '../redux/history/reducer';
import authR from '../redux/auth/reducer';
import Reactotron from '../config/Reactotron';

const reducers = combineReducers({
  historyR,
  authR,
  form: formReducer,
});

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);
export default store;
