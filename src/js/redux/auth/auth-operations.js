import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://book-reader-backend.herokuapp.com';

const headerToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/api/users/signup', credentials);
    headerToken.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    Notify.failure('Something went wrong!');
    console.log(error);
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/api/users/login', credentials);
    headerToken.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    Notify.failure('Something went wrong!');
  }
});

const authGoogle = createAsyncThunk('auth/google', async credentials => {
  try {
    const { data } = await axios.get('/api/users/google', credentials);
    return data;
  } catch (error) {
    Notify.failure('Something went wrong!');
  }
});

const current = createAsyncThunk('auth/google', async credentials => {
  try {
    const { data } = await axios.get('/api/users/current', credentials);
    return data;
  } catch (error) {
    Notify.failure('Something went wrong!');
  }
});

const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.get('/api/users/logout');
    headerToken.unset();
  } catch (error) {
    Notify.failure('Something went wrong!');
  }
});

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) return thunkAPI.rejectWithValue();

    headerToken.set(persistedToken);

    try {
      const { data } = await axios.get('/api/users/current');
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue();
    }
  }
);

const authOperations = {
  register,
  login,
  authGoogle,
  current,
  logOut,
  refreshCurrentUser,
};

export default authOperations;
