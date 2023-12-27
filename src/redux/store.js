import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { waterReducer } from './water/waterSlice';
import modalsReducer from './modals/modalsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};
export const store = configureStore({
  reducer: {
    water: waterReducer,
    modals: modalsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
