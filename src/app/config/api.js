import {create} from 'apisauce';

const api = create({
  baseURL: 'https://widergy-training-api.herokuapp.com',
  timeout: 30000,
});

export default api;
