import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://watertracker-ldwc.onrender.com/';

//================
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGJlZTkzODY1NmYxYTEzY2JlNjBiYSIsImlhdCI6MTcwMzY2OTQ3NCwiZXhwIjoxNzAzNzUyMjc0fQ.COjUTMUkCXNtuKNRC0OPpVCQDg5Bmyp2yNbBQKl8yYE';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//================

export const fetchTodayWater = createAsyncThunk(
  'water/fetchWather',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('api/waternotes/today');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async ({ amountWater, date }, thunkAPI) => {
    try {
      const { data } = await axios.post('api/waternotes', {
        date,
        amountWater,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWter = createAsyncThunk(
  'water/deleteWter',
  async (waterId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/waternotes/${waterId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
