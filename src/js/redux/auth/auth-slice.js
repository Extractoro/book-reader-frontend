import { authApi } from './authApi';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isPending: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.registrationUser.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        authApi.endpoints.registrationUser.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.name = payload.name;
          state.email = payload.email;
        }
      )
      .addMatcher(
        authApi.endpoints.registrationUser.matchRejected,
        (state, _action) => {
          state.isError = true;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.name = payload.name;
          state.email = payload.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.loginUser.matchRejected,
        (state, _action) => {
          state.isError = true;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        authApi.endpoints.fetchGoogleAccount.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.fetchGoogleAccount.matchRejected,
        (state, _action) => {
          state.user = null;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        authApi.endpoints.logoutUser.matchFulfilled,
        (state, _action) => {
          state.user = null;
          state.token = null;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        authApi.endpoints.currentUser.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        authApi.endpoints.currentUser.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.user = payload.user;
        }
      )
      .addMatcher(
        authApi.endpoints.currentUser.matchRejected,
        (state, _action) => {
          state.isError = true;
          state.isLoggedIn = false;
        }
      );
  },
});

export default authSlice.reducer;

// Selectors
export const selectUserName = state => state.auth.user.name;
export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsError = state => state.auth.isError;
export const selectIsPending = state => state.auth.isPending;
