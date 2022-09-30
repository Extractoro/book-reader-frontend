import booksOperations from './books-operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  books: null,
};

const authSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [booksOperations.getAllBooks.fulfilled](state, action) {
      state.books = action.payload.books;
    },
    [booksOperations.addBook.fulfilled](state, action) {
      state.books = action.payload.books;
    },
    // [booksOperations.logOut.fulfilled](state) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },
    // [booksOperations.refreshCurrentUser.fulfilled](state, action) {
    //   state.user = { ...action.payload };
    //   state.isLoggedIn = true;
    // },
  },
});

export default authSlice.reducer;
