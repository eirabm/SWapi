import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface searchBy {
  sortBy: string,
  actualPage: number,
}

const initialState: searchBy = {
  sortBy: "name",
  actualPage: 1
};

const searchBySlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
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

export const { changeSort, nextPage, prevPage } = searchBySlice.actions;
export const getSearchSelector = (state: RootState) => state.search;
export default searchBySlice.reducer;
