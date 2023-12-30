import { configureStore } from '@reduxjs/toolkit';
import {
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
import monthReducer from './month/monthSlice';
// import { authReducer } from './auth/auth.slice';
import { persistedContactsReducer } from './auth/auth.slice';

export const store = configureStore({
  reducer: {
    auth: persistedContactsReducer,
    water: waterReducer,
    dataMonth: monthReducer,
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
