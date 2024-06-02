import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query';

type FetchArguments = Omit<FetchArgs, 'method'> & {
  method: 'PUT' | 'DELETE' | 'GET' | 'POST' | 'PATCH';
};

const headers: Record<string, string | null> = {};

if (typeof window !== "undefined" && localStorage.getItem('token')) {
  headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  FetchArguments,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  return result;
};
