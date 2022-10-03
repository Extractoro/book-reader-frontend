import { workoutApi } from './workoutApi';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  workouts: [],
  isPending: false,
  isError: false,
};

const workoutSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        workoutApi.endpoints.fetchAllWorkouts.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        workoutApi.endpoints.fetchAllWorkouts.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.books = payload;
        }
      )
      .addMatcher(
        workoutApi.endpoints.fetchAllWorkouts.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      );
  },
});

export default workoutSlice.reducer;

// Selectors
// export const selectBooks = state => state.books.books;
