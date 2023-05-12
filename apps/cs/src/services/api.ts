import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import TokenService from './token';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
};

const api = axios.create(config);

api.interceptors.request.use(
  async (config) => {
    const token = await TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
