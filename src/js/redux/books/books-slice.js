import booksOperations from './books-operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  books: null,
};

const authSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [booksOperations.register.fulfilled](state, action) {
      state.message = action.payload.message;
    },
    [booksOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [booksOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [booksOperations.refreshCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
