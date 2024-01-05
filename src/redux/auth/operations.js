import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://watertracker-ldwc.onrender.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/api/auth/register`, credentials);

      toast.success('Registration successful');

      return data;
    } catch (error) {
      toast.error(error.message || 'Registration failed', error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/api/auth/login`, credentials);

      setAuthHeader(data.token);

      toast.success('Login successful');

      return data;
    } catch (error) {
      toast.error(error.message || 'Authorization failed');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  '/api/auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post(`/api/auth/logout`);
      clearAuthHeader();

      toast.success('You are logged out');
    } catch (error) {
      toast.error(error.message || 'Something went wrong');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('/api/user/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/avatar',
  async (formData, thunkAPI) => {
    
    try {
      // const formData = new FormData()
      // formData.append('file', file)
      // console.log(file)
     
      const { data } = await axios.patch('/api/user/avatars', formData);
    
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const FormSetting = createAsyncThunk(
  'auth/name','auth/email','auth/password',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('/api/user/name', '/api/user/email', '/api/user/password');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
