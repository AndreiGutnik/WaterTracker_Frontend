import { createSlice } from '@reduxjs/toolkit';
import { fetchMonthThunk } from './operations';
import { logOut } from 'redux/auth/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const monthSlice = createSlice({
  name: 'dataMonth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMonthThunk.pending]: handlePending,
    [fetchMonthThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.data = payload;
    },
    [fetchMonthThunk.rejected]: handleRejected,

    [logOut.pending]: handlePending,
    [logOut.fulfilled](state, _) {
      state.isLoading = false;
      state.error = null;
      state.data = [];
    },
    [logOut.rejected]: handleRejected,
  },
});

export default monthSlice.reducer;
