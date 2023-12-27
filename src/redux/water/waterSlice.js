import { createSlice } from '@reduxjs/toolkit';
import { addWater, deleteWter, fetchTodayWater } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: {
    [fetchTodayWater.pending]: handlePending,
    [fetchTodayWater.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTodayWater.rejected]: handleRejected,

    [addWater.pending]: handlePending,
    [addWater.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.waterNotes.push(action.payload); //TO CHECK
    },
    [addWater.rejected]: handleRejected,

    [deleteWter.pending]: handlePending,
    [deleteWter.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.waterNotes.findIndex(
        water => water._id === action.payload
      ); //TO CHECK
      state.items.waterNotes.splice(index, 1); //TO CHECK
    },
    [deleteWter.rejected]: handleRejected,
  },
});

export const waterReducer = waterSlice.reducer;
