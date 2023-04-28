import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
};

const api = axios.create(config);

api.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    const token = session?.user?.token?.access_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
