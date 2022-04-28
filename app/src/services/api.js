import axios from 'axios';

const api = axios.create({
  baseURL: 'http://2e0c-2804-431-cfee-993e-80d7-28ba-2890-bd76.ngrok.io'
});

export default api;