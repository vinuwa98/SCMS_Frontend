import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7022/api', // Your .NET backend URL
});

export default api;
