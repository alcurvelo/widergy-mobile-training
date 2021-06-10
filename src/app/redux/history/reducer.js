export const initialState = {
  history: [],
};

export function historyR(state = initialState, action) {
  switch (action.type) {
    case 'GET_HISTORIES':
      return {
        ...state,
        history: state.history,
      };
    case 'SET_HISTORY':
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case 'EDIT_EXPRESSION_HISTORY': {
      const {newExpression, id} = action.payload;
      let historyCopy = [...state.history];
      historyCopy[id] = newExpression;
      return {
        ...state,
        history: historyCopy,
      };
    }
    case 'DELETE_HISTORY_FOR_ID': {
      const historyFiltered = state.history.filter(
        (expression, key) => key !== action.payload,
      );
      return {
        ...state,
        history: historyFiltered,
      };
    }
    case 'DELETE_ALL': {
      return {
        ...state,
        history: [],
      };
    }
    default:
      return state;
  }
}
