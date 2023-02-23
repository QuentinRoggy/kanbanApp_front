import axios from 'axios';

const axiosBaseUrl = axios.create({ baseURL: 'http://localhost:3000/api/' });

export default axiosBaseUrl;
