import { createSlice } from '@reduxjs/toolkit';
import modalConstants from './modalСonstants';

const initialState = {
  modal: modalConstants.CLOSE,
  idWaterInModal: '',
};

const waterSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openAddWater: (state, action) => {
      state.modal = modalConstants.ADD_WATER;
      state.idWaterInModal = '';
    },
    openEditWater: (state, action) => {
      state.modal = modalConstants.EDIT_WATER;
      state.idWaterInModal = action.payload;
    },
    openDeleteWater: (state, action) => {
      state.modal = modalConstants.DELETE_WATER;
      state.idWaterInModal = action.payload;
    },
    closeModal: (state, action) => {
      state.modal = modalConstants.CLOSE;
      state.idWaterInModal = '';
    },
  },
});

export const { openAddWater, openEditWater, openDeleteWater, closeModal } =
  waterSlice.actions;

export default waterSlice.reducer;
