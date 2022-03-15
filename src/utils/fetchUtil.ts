import axios, { AxiosPromise, AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios';
interface ApiMethod {
  GET: string;
  POST: string;
  PUT: string;
  DELETE: string;
}

export const axiosMethod: ApiMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

interface ApiParams {
  url: string;
  params?: any;
  method?: Method;
  token?: any;
  data?: any;
}

export function axiosRequest<Type>(config: ApiParams): AxiosPromise<Type> {
  const { url, method, data, params, token } = config;

  const axiosConfig: AxiosRequestConfig = {
    url,
    params,
    method,
    data,
  };

  const headers: AxiosRequestHeaders = {
    Authorization: `Bearer ${token}`,
  };

  if (token) {
    axiosConfig.headers = headers;
  }

  return axios(axiosConfig);
}
