import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL,
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default createAxiosInstance;
