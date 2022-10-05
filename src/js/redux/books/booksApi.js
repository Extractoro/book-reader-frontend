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
  tagTypes: ['Books'],
  endpoints: builder => ({
    fetchAllBooks: builder.query({
      query: () => ({ url: '/api/books' }),
      providesTags: ['Books'],
      keepUnusedDataFor: 3,
    }),
    fetchOneBooks: builder.query({
      query: bookId => ({ url: `/api/books/${bookId}` }),
      providesTags: ['Books'],
    }),
    addBook: builder.mutation({
      query: body => ({
        url: '/api/books',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Books'],
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
      invalidatesTags: ['Books'],
    }),
    deleteBook: builder.mutation({
      query: bookId => ({
        url: `/api/books/${bookId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
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
