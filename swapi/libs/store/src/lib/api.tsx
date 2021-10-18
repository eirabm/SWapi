import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (id: number| null) => `people/?page=${id}`,
    }),
    searchPeople: builder.query({
      query: (searchInput: string) => `people/?search=${searchInput}`,
    }),
    getSpecies: builder.query({
      query: (id: number) => `species/?page=${id}`,
    }),
    searchSpecies: builder.query({
      query: (searchInput: string) => `species/?search=${searchInput}`,
    })
  }),
})

export const { useGetCharactersQuery, useGetSpeciesQuery, useSearchPeopleQuery, useSearchSpeciesQuery } = swApi;