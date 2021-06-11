import { completeReducer, createReducer } from 'redux-recompose';
import { actions } from './actions';
import Immutable from 'seamless-immutable';

const initialState = {
  token: '',
  tokenError: null,
  tokenLoading: false,
};

const authReducers = {
  primaryActions: actions.primaryActions,
  override: {
    [actions.SIGN_IN_SUCCESS]: (state, action) =>
      Immutable.merge(state, { token: action.payload.token }),
    [actions.NEW_USER_SUCCESS]: (state, action) =>
      Immutable.merge(state, { token: action.payload.token }),
    [actions.USER_LOGED_SUCCESS]: (state, action) =>
      Immutable.merge(state, { token: action.payload.token }),
    [actions.USER_LOGOUT_SUCCESS]: (state, action) =>
      Immutable.merge(state, { token: false }),
  },
};

export default createReducer(initialState, completeReducer(authReducers));
