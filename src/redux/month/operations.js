import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://watertracker-ldwc.onrender.com/';

export const fetchMonthThunk = createAsyncThunk(
  'month/fetchTodayData',
  async (month, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`api/waternotes/month?date=${month}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
