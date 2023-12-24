import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = ''; //===TODO===

export const fetchWater = createAsyncThunk(
  'water/fetchWather', //TO CHECK
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/water'); //TO CHECK
      return response.data; //TO CHECK
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater', //TO CHECK
  async ({ date, volume }, thunkAPI) => {
    try {
      const response = await axios.post('/water', { date, volume }); //TO CHECK
      return response.data; //TO CHECK
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWter = createAsyncThunk(
  'water/deleteWter', //TO CHECK
  async (waterId, thunkAPI) => {
    try {
      const response = await axios.delete(`/water/${waterId}`); //TO CHECK
      return response.data; //TO CHECK
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
