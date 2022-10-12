import { workoutApi } from './workoutApi';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  workouts: null,
  isPending: false,
  isError: false,
  inProgress: false,
};

const workoutSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    onClearWorkout(state) {
      state.workouts = null;
    },
  },
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
          state.inProgress = payload;
          state.workouts = payload;
        }
      )
      .addMatcher(
        workoutApi.endpoints.fetchAllWorkouts.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      .addMatcher(
        workoutApi.endpoints.createWorkout.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        workoutApi.endpoints.createWorkout.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.inProgress = true;
          state.workouts = payload;
        }
      )
      .addMatcher(
        workoutApi.endpoints.createWorkout.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      )
      .addMatcher(
        workoutApi.endpoints.updateWorkout.matchPending,
        (state, _action) => {
          state.isPending = true;
        }
      )
      .addMatcher(
        workoutApi.endpoints.updateWorkout.matchFulfilled,
        (state, { payload }) => {
          state.isPending = false;
          state.workouts = payload;
        }
      )
      .addMatcher(
        workoutApi.endpoints.updateWorkout.matchRejected,
        (state, _action) => {
          state.isPending = false;
          state.isError = true;
        }
      );
  },
});

export default workoutSlice.reducer;

// Selectors
export const selectWorkout = state => state.workout.workouts;
export const selectProgress = state => state.workout.inProgress;

// Action
export const { onClearWorkout } = workoutSlice.actions;
