import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  //   addBook,
  //   deleteBook,
  fetchAllBooks,
  //   fetchOneBook,
  //   updateBook,
} from '../../services/booksApi';

export const getAllBooks = createAsyncThunk(
  'books/allBooks',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    const response = await fetchAllBooks(persistedToken);
    console.log(response.data);
    return response.data;
  }
);

const authOperations = {
  fetchAllBooks,
  //   addBook,
  //   getOneBook,
  //   updateBook,
  //   deleteBook,
};

export default authOperations;
