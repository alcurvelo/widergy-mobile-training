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
      let {newExpression, id} = action.payload;
      let historyCopy = [];
      historyCopy = [...state.history];
      let historyFiltered = [];
      historyCopy.map((expression, key) => {
        if (key !== id) {
          historyFiltered.push(expression);
        } else {
          historyFiltered.push(newExpression);
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
