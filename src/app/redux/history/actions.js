import { createTypes, completeTypes } from 'redux-recompose';

import ExpressionService from '../../services/ExpressionService';
import Toast from '../components/Toast';

export const actions = createTypes(
  completeTypes({
    primaryActions: [
      'GET_HISTORIES',
      'SET_HISTORY',
      'EDIT_EXPRESSION_HISTORY',
      'DELETE_HISTORY_FOR_ID',
      'DEL_ALL',
    ],
    customCompleters: [],
  }),
  '@@HISTORY',
);

const HISTORY_TARGET = 'history';

const privateActionsCreator = {
  getHistoriesSuccess: payload => ({
    type: actions.GET_HISTORIES_SUCCESS,
    target: HISTORY_TARGET,
    payload,
  }),
  getHistoriesFailure: payload => ({
    type: actions.GET_HISTORIES_FAILURE,
    target: HISTORY_TARGET,
    payload,
  }),
  setHistorySuccess: payload => ({
    type: actions.SET_HISTORY_SUCCESS,
    target: HISTORY_TARGET,
    payload,
  }),
  setHistoryFailure: payload => ({
    type: actions.SET_HISTORY_FAILURE,
    target: HISTORY_TARGET,
    payload,
  }),
  editExpressionHistorySuccess: payload => ({
    type: actions.EDIT_EXPRESSION_HISTORY_SUCCESS,
    target: HISTORY_TARGET,
    payload,
  }),
  editExpressionHistoryFailure: payload => ({
    type: actions.EDIT_EXPRESSION_HISTORY_FAILURE,
    target: HISTORY_TARGET,
    payload,
  }),
  deleteHistoryForIdSuccess: payload => ({
    type: actions.DELETE_HISTORY_FOR_ID_SUCCESS,
    target: HISTORY_TARGET,
    payload,
  }),
  deleteHistoryForIdFailure: payload => ({
    type: actions.DELETE_HISTORY_FOR_ID_FAILURE,
    target: HISTORY_TARGET,
    payload,
  }),
  delAllSuccess: () => ({
    type: actions.DEL_ALL_SUCCESS,
    target: HISTORY_TARGET,
    payload: [],
  }),
  delAllFailure: () => ({
    type: actions.DEL_ALL_FAILURE,
    target: HISTORY_TARGET,
  }),
};

export const actionCreators = {
  getHistories: () => async dispatch => {
    dispatch({ type: actions.GET_HISTORIES, target: HISTORY_TARGET });
    const response = await ExpressionService.getExpressions();
    if (response.ok) {
      dispatch(privateActionsCreator.getHistoriesSuccess(response.data.data));
    } else {
      dispatch(privateActionsCreator.getHistoriesFailure(response.data.error));
    }
  },
  setHistory: expression => async dispatch => {
    dispatch({ type: actions.SET_HISTORY, target: HISTORY_TARGET });
    const response = await ExpressionService.setExpressions({
      expressions: [expression],
    });
    if (response.ok) {
      Toast(response.data.message, 'LONG', 'TOP', 25, 190);
      dispatch(privateActionsCreator.setHistorySuccess(expression));
    } else {
      dispatch(privateActionsCreator.setHistoryFailure(response.data.error));
    }
  },
  editExpressionHistory: objNewExpression => async dispatch => {
    dispatch({ type: actions.EDIT_EXPRESSION_HISTORY, target: HISTORY_TARGET });
    const response = await ExpressionService.editExpressionForId(
      objNewExpression,
    );
    if (response.ok) {
      Toast(response.data.message, 'LONG', 'TOP', 25, 190);
      dispatch(
        privateActionsCreator.editExpressionHistorySuccess(objNewExpression),
      );
    } else {
      dispatch(
        privateActionsCreator.editExpressionHistoryFailure(response.data.error),
      );
    }
  },
  deleteHistoryForId: idHistory => async dispatch => {
    dispatch({ type: actions.DELETE_HISTORY_FOR_ID, target: HISTORY_TARGET });
    const response = await ExpressionService.delExpression({
      expressions: [idHistory],
    });
    if (response.ok) {
      Toast(
        `La expresión Nº: ${idHistory + 1}\nSe ha eliminado.`,
        'LONG',
        'TOP',
        25,
        190,
      );
      dispatch(privateActionsCreator.deleteHistoryForIdSuccess(idHistory));
    } else {
      Toast(response.data.error, 'SHORT', 'TOP', 25, 190);
      dispatch(
        privateActionsCreator.deleteHistoryForIdFailure(response.data.error),
      );
    }
  },
  deleteAll: history => async dispatch => {
    dispatch({ type: actions.DEL_ALL, target: HISTORY_TARGET });
    if (history.length > 0) {
      const response = await ExpressionService.deleteAll(history);
      if (response.ok) {
        Toast(response.data.message, 'SHORT', 'BOTTOM', 0, 150);
        dispatch(privateActionsCreator.delAllSuccess());
      } else {
        Toast(response.data.error, 'SHORT', 'TOP', 25, 190);
        dispatch(privateActionsCreator.delAllFailure());
      }
    } else {
      Toast(
        'Para eliminar el historial debe haber expresión/es guardada/s.',
        'LONG',
        'BOTTOM',
        0,
        150,
      );
    }
  },
};
export default actionCreators;
