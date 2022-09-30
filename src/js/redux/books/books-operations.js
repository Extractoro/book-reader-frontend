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

export const addBook = createAsyncThunk(
  'books/addBook',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    const response = await addBook(persistedToken);
    console.log(response.data);
    return response.data;
  }
);

const authOperations = {
  getAllBooks,
  addBook,
  //   getOneBook,
  //   updateBook,
  //   deleteBook,
};

export default authOperations;
