import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
import { swApi } from "..";

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
  name: 'searchBy',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.topic = action.payload
    },
    changeSort: (state, action) => {
      state.sortBy = action.payload
    }
  }
})

export const { changeSearch, changeSort } = searchSlice.actions;
export const getSearchSelector = (state: RootState) => state.search;

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },

});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;