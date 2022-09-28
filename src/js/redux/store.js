import { configureStore } from '@reduxjs/toolkit';
// import authSlice from './auth/auth-slice';
// import { contactsSlice } from './contactsSlice';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PERSIST,
  PURGE,
  REGISTER,
  PAUSE,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
// import { contactsApi } from './contactsApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    // contacts: contactsSlice.reducer,
    // [contactsApi.reducerPath]: contactsApi.reducer,
    // auth: persistReducer(authPersistConfig, authSlice),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
