import axios, { AxiosRequestHeaders } from 'axios';
import useAuth from 'store/auth/auth';

const makeHeaders = () => {
  const token = useAuth.getState().token;
  if (token) {
    return {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}` || '',
    } as AxiosRequestHeaders;
  } else {
    useAuth.destroy();
  }
};

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export { api, makeHeaders };
