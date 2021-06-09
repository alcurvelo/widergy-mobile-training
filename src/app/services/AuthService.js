import api from '../config/api';

//const AUTH_HEADER = 'Authorization';

export default {
  singIn: async user => {
    return await api.post('/auth/login', user, {timeout: 60000});
  },
  newUser: async user => {
    return await api.post('/auth/create', user, {timeout: 60000});
  },
  logout: async token => {
    api.setHeader('Authorization', `Bearer ${token}`);
    return await api.get('/auth/logout', {timeout: 60000});
  },
};
