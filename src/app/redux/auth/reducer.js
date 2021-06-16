import { completeReducer, createReducer } from 'redux-recompose';
import { actions } from './actions';

const initialState = {
  token: '',
  tokenError: null,
  tokenLoading: false,
};

const authReducers = {
  primaryActions: [
    actions.SIGN_IN,
    actions.NEW_USER,
    actions.GET_SAVED_TOKEN,
    actions.LOGOUT,
  ],
};

export default createReducer(initialState, completeReducer(authReducers));
