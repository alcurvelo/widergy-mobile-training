import {completeReducer, createReducer} from 'redux-recompose';
import {actions} from './actions';
import Immutable from 'seamless-immutable';

const initialState = {
  history: [],
  historyFailure: null,
  historyLoading: false,
};
const historyReducers = {
  primaryActions: actions.primaryActions,
  override: {
    [actions.DEL_ALL_SUCCESS]: (state, action) =>
      Immutable.merge(state, {history: action.payload}),
    [actions.SET_HISTORY_SUCCESS]: (state, action) =>
      Immutable.merge(state, {history: [...state.history, action.payload]}),
    [actions.EDIT_EXPRESSION_HISTORY_SUCCESS]: (state, action) => {
      const {expression, id} = action.payload;
      let historyCopy = [...state.history];
      historyCopy[historyCopy.findIndex(element => element.id === id)] = {
        expression,
        id,
      };
      return Immutable.merge(state, {history: historyCopy});
    },
    [actions.DELETE_HISTORY_FOR_ID_SUCCESS]: (state, action) => {
      const historyFiltered = state.history.filter(
        element => element.id !== action.payload,
      );
      return Immutable.merge(state, {history: historyFiltered});
    },
  },
};

export default createReducer(initialState, completeReducer(historyReducers));
