import { createSlice } from '@reduxjs/toolkit';
import modalConstants from './modalСonstants';

const resetWter = {
  amountWater: 0,
  date: '',
  _id: '',
};

const initialState = {
  modal: modalConstants.CLOSE,
  waterInModal: resetWter,
};

const waterSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openAddWater: (state, action) => {
      state.modal = modalConstants.ADD_WATER;
      state.waterInModal = resetWter;
      console.log(resetWter);
    },
    openEditWater: (state, action) => {
      state.modal = modalConstants.EDIT_WATER;
      state.waterInModal = action.payload;
    },
    openDeleteWater: (state, action) => {
      state.modal = modalConstants.DELETE_WATER;
      state.waterInModal = action.payload;
    },
    closeModal: (state, action) => {
      state.modal = modalConstants.CLOSE;
      state.waterInModal = resetWter;
    },
  },
});

export const { openAddWater, openEditWater, openDeleteWater, closeModal } =
  waterSlice.actions;

export default waterSlice.reducer;
