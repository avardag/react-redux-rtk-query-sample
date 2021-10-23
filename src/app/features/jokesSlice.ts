import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
/* /react for React-specific entry point that automatically generates
 hooks corresponding to the defined endpoints */

interface IJoke {
  id: string;
  joke: string;
}
interface IJokeList {
  current_page: number;
  limit: number;
  next_page: number;
  previous_page: number;
  results: IJoke[];
  search_term: string;
  status: number;
  total_jokes: number;
  total_pages: number;
}

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "jokesApi",
  tagTypes: ["Jokes"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://icanhazdadjoke.com",
    //set headers if needed
    prepareHeaders(headers) {
      headers.set("Accept", "application/json");
      headers.set("User-Agent", "local development");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRandomJoke: builder.query<IJoke, string>({
      query: () => ``,
    }),
    //builder.query<ResultType, QueryArg>
    searchAJoke: builder.query<IJokeList, string>({
      query(term: string) {
        return `/search?term=${term}`;
      },
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRandomJokeQuery, useSearchAJokeQuery } = apiSlice;
