import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import createAxiosInstance from './axiosInstance';

class HttpWrapper {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = createAxiosInstance(baseURL);

    this.axiosInstance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  }

  private handleResponse(response: AxiosResponse) {
    return response.data;
  }

  private handleError(error: AxiosError) {
    console.error('Error en la solicitud:', error);
    return Promise.reject(error);
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response;
  }

  // Otros métodos (post, put, delete) pueden ser añadidos aquí...
}

export default HttpWrapper;
