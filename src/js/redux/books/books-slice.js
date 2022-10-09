import { booksApi } from './booksApi';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  books: [],
  isPending: false,
  isError: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        booksApi.endpoints.fetchAllBooks.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        booksApi.endpoints.fetchAllBooks.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.books = payload;
        }
      )
      .addMatcher(
        booksApi.endpoints.fetchAllBooks.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      .addMatcher(
        booksApi.endpoints.fetchOneBooks.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        booksApi.endpoints.fetchOneBooks.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.books = payload;
        }
      )
      .addMatcher(
        booksApi.endpoints.fetchOneBooks.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      .addMatcher(booksApi.endpoints.addBook.matchPending, (state, _action) => {
        state.isPending = true;
      })
      .addMatcher(
        booksApi.endpoints.addBook.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.books = [...state.books, payload];
        }
      )
      .addMatcher(
        booksApi.endpoints.addBook.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      .addMatcher(
        booksApi.endpoints.updateBook.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        booksApi.endpoints.updateBook.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.books = payload;
        }
      )
      .addMatcher(
        booksApi.endpoints.updateBook.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      .addMatcher(
        booksApi.endpoints.deleteBook.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        booksApi.endpoints.deleteBook.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.books = payload;
        }
      )
      .addMatcher(
        booksApi.endpoints.deleteBook.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      );
  },
});

export default booksSlice.reducer;

// Selectors
export const selectBooks = state => state.books.books;
export const selectBooksIsError = state => state.books.isError;
export const selectBooksIsPending = state => state.books.isPending;

export const getPlan = state => {
  const allBooks = selectBooks(state) || [];
  console.log(allBooks);
  return allBooks?.filter(book => book.status === 'plan');
};

export const getRead = state => {
  const allBooks = selectBooks(state) || [];
  return allBooks?.filter(book => book.status === 'read');
};

export const getDone = state => {
  const allBooks = selectBooks(state) || [];
  return allBooks?.filter(book => book.status === 'done');
};
