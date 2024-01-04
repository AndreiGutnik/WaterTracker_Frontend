import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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

      toast.success('Added successfully');

      return response.data;
    } catch (error) {
      toast.error(error.message || 'Addition failed', error);
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
      toast.success('Editing is successful');
      return response.data;
    } catch (error) {
      toast.error(error.message || 'Editing failed', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterId, thunkAPI) => {
    try {
      const response = await axios.delete(`api/waternotes/${waterId}`);
      if (response.status !== 200) {
        throw new Error('Whoops!');
      }
      toast.success('Deleted');
      return waterId;
    } catch (error) {
      toast.error(error.message || 'Failed to delete', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
