import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://watertracker-ldwc.onrender.com/';

//================  TESTING  ==>
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGQ3NDQ4MWQzZDQ2NDA5MDg5OWNlNSIsImlhdCI6MTcwMzc2OTE5MywiZXhwIjoxNzAzODUxOTkzfQ.RMBKwhrC3OiIQXjfgA1IOwWVvuHSS9kXWMKBTMsEL40';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//================  TESTING  <==

export const fetchTodayWater = createAsyncThunk(
  'water/fetchWather',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/waternotes/today');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async ({ amountWater, date }, thunkAPI) => {
    try {
      const response = await axios.post('api/waternotes', {
        date,
        amountWater,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async ({ _id, amountWater, date }, thunkAPI) => {
    try {
      const response = await axios.put(`api/waternotes/${_id}`, {
        date,
        amountWater,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWter = createAsyncThunk(
  'water/deleteWter',
  async (waterId, thunkAPI) => {
    try {
      const response = await axios.delete(`api/waternotes/${waterId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
