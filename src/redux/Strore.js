import { configureStore } from '@reduxjs/toolkit';
import seatSlice from './seatSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    seat:seatSlice,
  },
})

setupListeners(store.dispatch)