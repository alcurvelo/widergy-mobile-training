import { createTypes, completeTypes } from 'redux-recompose';

import ExpressionService from '../../services/ExpressionService';
import Toast from '../components/Toast';

export const actions = createTypes(
  completeTypes({
    primaryActions: [
      'GET_HISTORIES',
      'SET_HISTORY',
      'EDIT_EXPRESSION_HISTORY',
      'DELETE_HISTORY_BY_ID',
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
  editExpressionHistoryFailure: () => ({
    type: actions.EDIT_EXPRESSION_HISTORY_FAILURE,
    target: HISTORY_TARGET,
  }),
  deleteHistoryByIdSuccess: payload => ({
    type: actions.DELETE_HISTORY_BY_ID_SUCCESS,
    target: HISTORY_TARGET,
    payload,
  }),
  deleteHistoryByIdFailure: payload => ({
    type: actions.DELETE_HISTORY_BY_ID_FAILURE,
    target: HISTORY_TARGET,
    payload,
  }),
  delAllSuccess: () => ({
    type: actions.DEL_ALL_SUCCESS,
    target: HISTORY_TARGET,
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
      dispatch(
        privateActionsCreator.getHistoriesSuccess(
          response.data.data !== undefined ? response.data.data : [],
        ),
      );
    } else {
      dispatch(privateActionsCreator.getHistoriesFailure(response.data.error));
    }
  },
  setHistory: (expression, refreshHistory) => async dispatch => {
    dispatch({ type: actions.SET_HISTORY, target: HISTORY_TARGET });
    const response = await ExpressionService.setExpressions({
      expressions: [expression],
    });
    if (response.ok) {
      Toast(response.data.message, 'LONG', 'TOP', 25, 190);
      dispatch(privateActionsCreator.setHistorySuccess(expression));
      refreshHistory();
    } else {
      dispatch(privateActionsCreator.setHistoryFailure(response.data.error));
    }
  },
  editExpressionHistory: objNewExpression => async dispatch => {
    dispatch({ type: actions.EDIT_EXPRESSION_HISTORY, target: HISTORY_TARGET });
    const response = await ExpressionService.editExpressionById(
      objNewExpression,
    );
    if (response.ok) {
      Toast(response.data.message, 'LONG', 'TOP', 25, 190);
      dispatch(
        privateActionsCreator.editExpressionHistorySuccess(objNewExpression),
      );
    } else {
      Toast('No se logro editar el mensaje', 'LONG', 'TOP', 25, 190);
      dispatch(privateActionsCreator.editExpressionHistoryFailure());
    }
  },
  deleteHistoryById: idHistory => async dispatch => {
    dispatch({ type: actions.DELETE_HISTORY_BY_ID, target: HISTORY_TARGET });
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
      dispatch(privateActionsCreator.deleteHistoryByIdSuccess(idHistory));
    } else {
      Toast(response.data.error, 'SHORT', 'TOP', 25, 190);
      dispatch(
        privateActionsCreator.deleteHistoryByIdFailure(response.data.error),
      );
    }
  },
  deleteAll: history => async dispatch => {
    dispatch({ type: actions.DEL_ALL, target: HISTORY_TARGET });
    const response = await ExpressionService.deleteAll(history);
    if (response.ok) {
      Toast(response.data.message, 'SHORT', 'BOTTOM', 0, 150);
      dispatch(privateActionsCreator.delAllSuccess());
    } else {
      Toast(response.data.error, 'SHORT', 'TOP', 25, 190);
      dispatch(privateActionsCreator.delAllFailure());
    }
  },
};
export default actionCreators;
