import { createSlice } from '@reduxjs/toolkit';
import modalConstants from './modalСonstants';

const initialState = {
  modal: modalConstants.CLOSE,
};

const waterSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openAddWater: (state, action) => {
      state.modal = modalConstants.ADD_WATER;
    },
    openEditWater: (state, action) => {
      state.modal = modalConstants.EDIT_WATER;
    },
    openDeleteWater: (state, action) => {
      state.modal = modalConstants.DELETE_WATER;
    },
    closeModal: (state, action) => {
      state.modal = modalConstants.CLOSE;
    },
  },
});

export const { openAddWater, openEditWater, openDeleteWater, closeModal } =
  waterSlice.actions;

export default waterSlice.reducer;
