import {createStore, combineReducers} from 'redux';

import {historyReducer} from '../redux/history/reducer';

const reducers = combineReducers({
  historyReducer,
});

const store = createStore(reducers);
export default store;
