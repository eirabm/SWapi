import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from "..";

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (id: number) => `people/${id}`,
    }),
    searchPeople: builder.query({
      query: (searchInput: string) => `people/?search=${searchInput}`,
    }),
    getSpecies: builder.query({
      query: (id: number) => `species/${id}`,
    }),
  }),
})

export const { useGetCharactersQuery, useGetSpeciesQuery } = swApi;

export interface searchBy {
  topic: string;
}

const initialState: searchBy = {
  topic: "people"
};

const searchSlice = createSlice({
  name: 'searchBy',
  initialState,
  reducers:{
    changeSearch(state, action) {
      return state.topic = action.payload;
    },
  }
})



export const { changeSearch } = searchSlice.actions;
export const getSearchSelector = (state: RootState) => initialState.topic;
export default searchSlice.reducer;

