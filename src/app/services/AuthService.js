import api from '../config/api';

export default {
  singIn: user => api.post('/auth/login', user),
  newUser: user => api.post('/auth/create', user),
  logout: () => api.get('/auth/logout'),
  setHeaderToken: token => api.setHeader('Authorization', `Bearer ${token}`),
};
