import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/auth-slice';
// import { booksSlice } from './books/books-slice';
// import { booksApi } from './books/books-operations';
// import { trainingsSlice } from './trainings/trainings-slice';
// import { trainingsApi } from './trainings/trainings-operations';
import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   PAUSE,
//   REHYDRATE,
// } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    // books: booksSlice.reducer,
    // [booksApi.reducerPath]: booksApi.reducer,
    // trainings: trainingsSlice.reducer,
    // [trainingsApi.reducerPath]: trainingsApi.reducer,
    auth: persistReducer(authPersistConfig, authSlice),
  },
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  //   booksApi.middleware,
  //   trainingsApi.middleware,
  // ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
