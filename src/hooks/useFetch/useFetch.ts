import { useEffect } from 'react';
import { useQuery } from 'react-query';

import type { AxiosResponse } from 'axios';
import type { IUseFetch } from './useFetch.types';

import { api, makeHeaders } from 'api/api';
import useApp from 'store/app/app';

export function useFetch<Data = any>({ name, url, options }: IUseFetch) {
  const { handleError } = useApp();

  const { data, isLoading, error } = useQuery(
    [name || url],
    async () => await api.get(url, { headers: makeHeaders() }),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      ...options,
    }
  );

  const dataAxios = data as AxiosResponse;

  useEffect(() => {
    if (error) handleError(error);
  }, [handleError, error]);

  return { response: dataAxios?.data as Data, isLoading };
}
