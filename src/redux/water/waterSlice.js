import { createSlice } from '@reduxjs/toolkit';
import { addWater, deleteWter, fetchWater } from './operations';

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
    [fetchWater.pending]: handlePending,
    [fetchWater.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload; //TO CHECK
    },
    [fetchWater.rejected]: handleRejected,

    [addWater.pending]: handlePending,
    [addWater.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload); //TO CHECK
    },
    [addWater.rejected]: handleRejected,

    [deleteWter.pending]: handlePending,
    [deleteWter.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        water => water.id === action.payload.id
      ); //TO CHECK
      state.items.splice(index, 1); //TO CHECK
    },
    [deleteWter.rejected]: handleRejected,
  },
});

export const waterReducer = waterSlice.reducer;
