import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://watertracker-ldwc.onrender.com/';

export const fetchTodayWater = createAsyncThunk(
  'water/fetchWater',
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
  'water/deleteWater',
  async (waterId, thunkAPI) => {
    try {
      const response = await axios.delete(`api/waternotes/${waterId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
