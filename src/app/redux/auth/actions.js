import { createTypes, completeTypes } from 'redux-recompose';

import AuthService from '../../services/AuthService';
import Toast from '../components/Toast';
import storagePersist from '../../services/storagePersist';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['SIGN_IN', 'NEW_USER', 'GET_SAVED_TOKEN', 'LOGOUT'],
    customCompleters: [],
  }),
  '@@AUTH',
);

const TOKEN_TARGET = 'token';

const privateActionsCreator = {
  signInSuccess: payload => ({
    type: actions.SIGN_IN_SUCCESS,
    target: TOKEN_TARGET,
    payload,
  }),
  signInFailure: () => ({
    type: actions.SIGN_IN_FAILURE,
    target: TOKEN_TARGET,
  }),
  newUserSuccess: payload => ({
    type: actions.NEW_USER_SUCCESS,
    target: TOKEN_TARGET,
    payload,
  }),
  newUserFailure: () => ({
    type: actions.NEW_USER_FAILURE,
    target: TOKEN_TARGET,
  }),
  getSavedTokenSuccess: payload => ({
    type: actions.GET_SAVED_TOKEN_SUCCESS,
    target: TOKEN_TARGET,
    payload,
  }),
  getSavedTokenFailure: () => ({
    type: actions.GET_SAVED_TOKEN_FAILURE,
    target: TOKEN_TARGET,
  }),
  logoutSuccess: payload => ({
    type: actions.LOGOUT_SUCCESS,
    target: TOKEN_TARGET,
    payload,
  }),
  logoutFailure: () => ({
    type: actions.LOGOUT_FAILURE,
    target: TOKEN_TARGET,
  }),
};

export const actionsCreators = {
  signIn: user => async dispatch => {
    dispatch({ type: actions.SIGN_IN, target: TOKEN_TARGET });
    const response = await AuthService.singIn(user);
    if (response.ok) {
      storagePersist.setElementStorage(response.data.token, 'token');
      AuthService.setHeaderToken(response.data.token);
      dispatch(privateActionsCreator.signInSuccess(response.data));
    } else {
      Toast(response.data.error, 'LONG', 'CENTER', 25, 0);
      dispatch(privateActionsCreator.signInFailure());
    }
  },
  newUser:
    ({ email, password }) =>
    async dispatch => {
      dispatch({ type: actions.NEW_USER, target: TOKEN_TARGET });
      const response = await AuthService.newUser({ email, password });
      if (response.ok) {
        storagePersist.setElementStorage(response.data.token, 'token');
        AuthService.setHeaderToken(response.data.token);
        dispatch(privateActionsCreator.newUserSuccess(response.data));
      } else {
        Toast(response.data.error, 'LONG', 'CENTER', 25, 0);
        dispatch(privateActionsCreator.newUserFailure());
      }
    },
  getSavedToken: () => async dispatch => {
    dispatch({ type: actions.GET_SAVED_TOKEN, target: TOKEN_TARGET });
    const token = await storagePersist.getElementStorage('token');
    if (token) {
      AuthService.setHeaderToken(token);
      dispatch(privateActionsCreator.getSavedTokenSuccess(token));
    } else {
      dispatch(privateActionsCreator.getSavedTokenFailure());
    }
  },
  logout: () => async dispatch => {
    dispatch({ type: actions.LOGOUT, target: TOKEN_TARGET });
    const response = await AuthService.logout();
    if (response.ok) {
      Toast(response.data.message, 'LONG', 'CENTER', 25, 0);
      storagePersist.removeItem('token');
      dispatch(privateActionsCreator.logoutSuccess(''));
    } else {
      dispatch(privateActionsCreator.logoutFailure());
      Toast(response.data.error, 'LONG', 'CENTER', 25, 0);
    }
  },
};

export default actionsCreators;
