import AuthService from '../../services/AuthService';
import Toast from '../components/Toast';
import storagePersist from '../../services/storagePersist';

const actionsAuth = {
  signIn: user => async dispatch => {
    const response = await AuthService.singIn(user);
    if (response.ok) {
      storagePersist.setElementStorage(response.data.token, 'token');
      AuthService.setHeaderToken(response.data.token);
      dispatch({type: 'SIGN_IN', payload: response.data});
    } else {
      Toast(response.data.error, 'LONG', 'CENTER', 25, 0);
    }
  },
  newUser: user => async dispatch => {
    if (user.password === user.confirmPassword) {
      delete user.confirmPassword;
      const response = await AuthService.newUser(user);
      if (response.ok) {
        storagePersist.setElementStorage(response.data.token, 'token');
        AuthService.setHeaderToken(response.data.token);
        dispatch({type: 'NEW_USER', payload: response.data});
      } else {
        Toast(response.data.error, 'LONG', 'CENTER', 25, 0);
      }
    } else {
      Toast(
        'Las contraseñas no son iguales, vuelve a intentarlo.',
        'LONG',
        'CENTER',
        25,
        0,
      );
    }
  },
  userLoged: () => async dispatch => {
    const token = await storagePersist.getElementStorage('token');
    if (token !== false) {
      AuthService.setHeaderToken(token);
      dispatch({type: 'USER_LOGED', payload: token});
    }
  },
  logout: () => async dispatch => {
    const response = await AuthService.logout();
    if (response.ok) {
      Toast(response.data.message, 'LONG', 'CENTER', 25, 0);
      storagePersist.removeItem('token');
      dispatch({type: 'USER_LOGOUT'});
    } else {
      Toast(response.data.error, 'LONG', 'CENTER', 25, 0);
    }
  },
};

export default actionsAuth;
