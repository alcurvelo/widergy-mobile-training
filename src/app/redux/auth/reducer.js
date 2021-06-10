export const initialState = {
  token: false,
};

export function authR(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        ...state,
        token: action.payload.token,
      };
    }
    case 'NEW_USER': {
      return {
        ...state,
        token: action.payload.token,
      };
    }
    case 'USER_LOGED': {
      return {
        ...state,
        token: action.payload,
      };
    }
    case 'USER_LOGOUT': {
      return {
        ...state,
        token: false,
      };
    }
    default:
      return state;
  }
}
