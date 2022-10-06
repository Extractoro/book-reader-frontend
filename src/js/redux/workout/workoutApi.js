import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const workoutApi = createApi({
  reducerPath: 'workoutApi',
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
  tagTypes: ['workout'],
  endpoints: builder => ({
    fetchAllWorkouts: builder.query({
      query: () => ({ url: '/api/training' }),
      providesTags: ['workout'],
      keepUnusedDataFor: 1,
    }),
    createWorkout: builder.mutation({
      query: body => ({
        url: '/api/training',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['workout'],
    }),
    updateWorkout: builder.mutation({
      query: data => {
        const { id, ...body } = data;
        return {
          url: `/api/training/${id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['workout'],
    }),
  }),
});

export const {
  useFetchAllWorkoutsQuery,
  useCreateWorkoutMutation,
  useUpdateWorkoutMutation,
} = workoutApi;
