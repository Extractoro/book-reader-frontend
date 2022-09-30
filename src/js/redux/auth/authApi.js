import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-reader-backend.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['auth'],
  endpoints: builder => ({
    registrationUser: builder.mutation({
      query: body => ({ url: '/api/users/signup', method: 'POST', body }),
      invalidatesTags: ['auth'],
    }),
    loginUser: builder.mutation({
      query: body => ({
        url: '/api/users/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['auth'],
    }),
    logoutUser: builder.query({
      query: () => ({
        url: '/api/users/logout',
        method: 'GET',
      }),
      providesTags: ['auth'],
    }),
    fetchGoogleAccount: builder.query({
      query: () => ({
        url: '/api/users/google',
      }),
      providesTags: ['auth'],
    }),
    currentUser: builder.query({
      query: () => ({
        url: '/api/users/current',
      }),
      providesTags: ['auth'],
    }),
  }),
});

export const {
  useRegistrationUserMutation,
  useLoginUserMutation,
  useLogoutUserQuery,
  useFetchGoogleAccountQuery,
  useCurrentUserQuery,
} = authApi;
