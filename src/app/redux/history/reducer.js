export const initialState = {
  history: [],
};

export function historyReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_HISTORIES':
      return state.history;
    case 'SET_HISTORY':
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case 'EDIT_EXPRESSION_HISTORY': {
      let historyCopy = [];
      historyCopy = [...state.history];
      const historyFiltered = historyCopy.filter(expression => {
        if (expression.id !== action.payload) {
          return expression;
        } else {
          return action.payload;
        }
      });
      return {
        ...state,
        history: historyFiltered,
      };
    }
    case 'DELETE_HISTORY_FOR_ID': {
      let historyCopy = [];
      historyCopy = [...state.history];
      const historyFiltered = historyCopy.filter(
        expression => expression.id !== action.payload,
      );
      return {
        ...state,
        history: historyFiltered,
      };
    }
    case 'DELETE_ALL_HISTORIES': {
      return {
        ...state,
        history: [],
      };
    }
    default:
      return state;
  }
}
