import { configureStore } from '@reduxjs/toolkit';
import search from './data-manager.slice'

export const store = configureStore({
  reducer: {
    search,
  }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;