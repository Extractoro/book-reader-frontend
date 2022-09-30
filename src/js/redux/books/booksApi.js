import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'booksApi',
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
  tagTypes: ['books'],
  endpoints: builder => ({
    fetchAllBooks: builder.query({
      query: () => ({ url: '/api/books' }),
      providesTags: ['books'],
    }),
    fetchOneBooks: builder.query({
      query: bookId => ({ url: `/api/books/${bookId}` }),
      providesTags: ['books'],
    }),
    addBook: builder.mutation({
      query: body => ({
        url: '/api/books',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['books'],
    }),
    updateBook: builder.mutation({
      query: data => {
        const { id, ...body } = data;
        return {
          url: `/api/books/${id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['books'],
    }),
    deleteBook: builder.mutation({
      query: bookId => ({
        url: `/api/books/${bookId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),
  }),
});

export const {
  useFetchAllBooksQuery,
  useFetchOneBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
