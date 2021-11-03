import { configureStore } from '@reduxjs/toolkit';
import search from './data-manager.slice';
import swApi from './api';

export const store = configureStore({
  reducer: {
    search,
    swApi,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
