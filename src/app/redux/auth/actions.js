import { createTypes, completeTypes } from 'redux-recompose';

import AuthService from '../../services/AuthService';
import Toast from '../components/Toast';
import storagePersist from '../../services/storagePersist';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['SIGN_IN', 'NEW_USER', 'USER_LOGED', 'LOGOUT'],
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
  newUserSuccess: payload => ({
    type: actions.NEW_USER_SUCCESS,
    target: TOKEN_TARGET,
    payload,
  }),
  userLogedSuccess: payload => ({
    type: actions.USER_LOGED_SUCCESS,
    target: TOKEN_TARGET,
    payload,
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
    }
  },
  newUser: user => async dispatch => {
    if (user.password === user.confirmPassword) {
      dispatch({ type: actions.NEW_USER, target: TOKEN_TARGET });
      delete user.confirmPassword;
      const response = await AuthService.newUser(user);
      if (response.ok) {
        storagePersist.setElementStorage(response.data.token, 'token');
        AuthService.setHeaderToken(response.data.token);
        dispatch(privateActionsCreator.newUserSuccess(response.data));
      } else {
        Toast(response.data.error, 'LONG', 'CENTER', 25, 0);
      }
    } else {
      Toast(
        'Las contraseñas no son iguales, vuelve a intentarlo.',
        'LONG',
        'CENTER',
        25,
        0,
      );
    }
  },
  userLoged: () => async dispatch => {
    dispatch({ type: actions.USER_LOGED, target: TOKEN_TARGET });
    const token = await storagePersist.getElementStorage('token');
    if (token !== false) {
      AuthService.setHeaderToken(token);
      dispatch(privateActionsCreator.userLogedSuccess(token));
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
