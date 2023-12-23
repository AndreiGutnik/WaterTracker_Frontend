import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import axios from 'axios';

// axios.defaults.baseURL = '';

export const fetchWater = createAsyncThunk(
  'water/fetchWather',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/water');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
