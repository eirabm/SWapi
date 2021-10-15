import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (id: number) => `people/${id}`,
    }),
    getSpecies: builder.query({
      query: (id: number) => `species/${id}`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCharactersQuery, useGetSpeciesQuery } = swApi