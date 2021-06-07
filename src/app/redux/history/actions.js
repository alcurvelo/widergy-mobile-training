export const actionHistory = {
  getHistories: () => dispatch => {
    dispatch({type: 'GET_HISTORIES'});
  },
  setHistory: expression => dispatch => {
    dispatch({type: 'SET_HISTORY', payload: expression});
  },
  editExpressionHistory: newExpression => dispatch => {
    dispatch({type: 'EDIT_EXPRESSION_HISTORY', payload: newExpression});
  },
  deleteHistoryForId: idHistory => dispatch => {
    dispatch({type: 'DELETE_HISTORY_FOR_ID', payload: idHistory});
  },
  deleteAllHistories: () => dispatch => {
    dispatch({type: 'DELETE_ALL_HISTORIES'});
  },
};

export default actionHistory;
