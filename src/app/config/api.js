import {create} from 'apisauce';

const api = create({
  baseURL: 'https://widergy-training-api.herokuapp.com',
  timeout: 60000,
});

export default api;
