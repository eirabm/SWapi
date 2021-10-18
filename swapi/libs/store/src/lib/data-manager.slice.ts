import { createSlice, createSelector} from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';

export interface searchBy {
  topic: string,
  sortBy: string,
  actualPage: number,
}

const initialState: searchBy = {
  topic: "people",
  sortBy: "name",
  actualPage: 1
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.topic = action.payload
    },
    changeSort: (state, action) => {
      state.sortBy = action.payload
    },
    nextPage: (state) => {
      state.actualPage++;
     },
     prevPage: (state) => {
      state.actualPage--;
     }
  }
})

export const { changeSearch, changeSort, nextPage, prevPage } = searchSlice.actions;
export const getSearchSelector = (state: RootState) => state.search;

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },

});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;