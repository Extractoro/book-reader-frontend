import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import authSlice from './auth/auth-slice';
import { authApi } from './auth/authApi';
import booksSlice from './books/books-slice';
import { booksApi } from './books/booksApi';
import workoutSlice from './workout/workout-slice';
import { workoutApi } from './workout/workoutApi';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn', 'user'],
};

export const store = configureStore({
  reducer: {
    books: booksSlice,
    [booksApi.reducerPath]: booksApi.reducer,
    workout: workoutSlice,
    [workoutApi.reducerPath]: workoutApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: persistReducer(authPersistConfig, authSlice),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    booksApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
