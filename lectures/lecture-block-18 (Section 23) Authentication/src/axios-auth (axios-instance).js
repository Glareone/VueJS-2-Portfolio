import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://vuejs-axios-e9a2c.firebaseio.com',
  // headers:
});

axiosInstance.defaults.headers.common['Authorization'] = 'token!';

export default axiosInstance;