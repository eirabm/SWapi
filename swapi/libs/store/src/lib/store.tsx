import { configureStore } from '@reduxjs/toolkit';
import changeSearch from './data-manager.slice';

export const store = configureStore({
  reducer: {
    changeSearch,
  },

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;