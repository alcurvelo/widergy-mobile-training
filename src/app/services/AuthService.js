import api from '../config/api';

export default {
  singIn: async user => {
    return await api.post('/auth/login', user);
  },
  newUser: async user => {
    return await api.post('/auth/create', user);
  },
  logout: async () => {
    return await api.get('/auth/logout');
  },
  setHeaderToken: async token => {
    api.setHeader('Authorization', `Bearer ${token}`);
  },
};
