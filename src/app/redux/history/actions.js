import Toast from '../components/Toast';

export const actionHistory = {
  getHistories: () => dispatch => {
    dispatch({type: 'GET_HISTORIES'});
  },
  setHistory: expression => dispatch => {
    Toast('Expresión salvada.', 'LONG', 'TOP', 25, 190);
    dispatch({type: 'SET_HISTORY', payload: expression});
  },
  editExpressionHistory: objNewExpression => dispatch => {
    Toast(
      `La expresión Nº: ${objNewExpression.id + 1}\nHa cambiado.`,
      'LONG',
      'TOP',
      25,
      190,
    );
    dispatch({type: 'EDIT_EXPRESSION_HISTORY', payload: objNewExpression});
  },
  deleteHistoryForId: idHistory => dispatch => {
    Toast(
      `La expresión Nº: ${idHistory + 1}\nSe ha eliminado.`,
      'SHORT',
      'TOP',
      25,
      190,
    );
    dispatch({type: 'DELETE_HISTORY_FOR_ID', payload: idHistory});
  },
  deleteAll: history => dispatch => {
    if (history.length > 0) {
      Toast('El historial se ha eliminado.', 'SHORT', 'BOTTOM', 0, 150);
      dispatch({type: 'DELETE_ALL'});
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

export default actionHistory;
