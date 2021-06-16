import { completeReducer, createReducer } from 'redux-recompose';
import { actions } from './actions';
import Immutable from 'seamless-immutable';

const initialState = {
  history: [],
  historyError: null,
  historyLoading: false,
};
const historyReducers = {
  primaryActions: [actions.DEL_ALL, actions.GET_HISTORIES],
  override: {
    [actions.SET_HISTORY_SUCCESS]: (state, action) => {
      /* Sí recibiera el id cuando guardara la expresión, hiciera esto.
      const {expression, id} = action.payload
      Immutable.merge(state, {
        history: [
          ...state.history,
          { expression, id },
        ],
      })*/
    },
    [actions.EDIT_EXPRESSION_HISTORY_SUCCESS]: (state, action) => {
      const { expression, id } = action.payload;
      let historyCopy = [...state.history];
      historyCopy[historyCopy.findIndex(element => element.id === id)] = {
        expression,
        id,
      };
      return Immutable.merge(state, { history: historyCopy });
    },
    [actions.DELETE_HISTORY_BY_ID_SUCCESS]: (state, action) => {
      const historyFiltered = state.history.filter(
        element => element.id !== action.payload,
      );
      return Immutable.merge(state, { history: historyFiltered });
    },
    [actions.DEL_ALL_SUCCESS]: state =>
      Immutable.merge(state, { history: initialState.history }),
  },
};

export default createReducer(initialState, completeReducer(historyReducers));
