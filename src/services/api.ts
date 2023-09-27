import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yourbackendapi.com/',
});

export default api;
