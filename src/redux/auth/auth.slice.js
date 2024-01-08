import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateAvatar,
  updateDailyNorma,
  updateUserData,
} from './operations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRegistered: false,
  isRefreshing: false,
  waterRate: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRegistered = true;
      })
      // .addCase(register.rejected, (state, action) => state)

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL ;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload ;
      })
      
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(updateDailyNorma.fulfilled, (state, action) => {
        state.user.waterRate = action.payload;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

// export const authReducer = authSlice.reducer;
