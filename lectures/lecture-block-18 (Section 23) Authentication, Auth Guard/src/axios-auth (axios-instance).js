import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
  // headers:
});

// demo purposes only:
// axiosInstance.defaults.headers.common['Authorization'] = 'token!';

export default axiosInstance;