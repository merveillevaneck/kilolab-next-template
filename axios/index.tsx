import axios, { AxiosRequestConfig } from 'axios';
import {configure} from 'axios-hooks';
import {store} from '../redux';

export const DefaultAxiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const API = axios.create(DefaultAxiosConfig);

API.interceptors.request.use((config: AxiosRequestConfig) => {
  const jwtToken = store.getState().session?.authToken;
  const Headers = {
    ...config.headers,
    "authorization": `bearer ${jwtToken}`,
  };
  console.log('headers:', Headers);
  config.headers = Headers;

  return config;
});

configure({axios: API});