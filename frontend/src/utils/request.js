import axios from 'axios';
import config from './config';

const instance = axios.create({
  baseURL: config.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${config.REACT_APP_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(response => {
  return response;
});

export default instance;
