import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PayloadType } from "../utils/api";

const BASE_URL = "https://www.googleapis.com/customsearch";
const apiKeys = {
  key: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY,
  cx: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CTX_KEY,
};

const createRequest = (url) => ({ url });

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSearches: builder.query({
      query: (args: PayloadType) =>
        createRequest(
          `/v1?q=${args.q}&start=${args.start}&key=${apiKeys.key}&cx=${apiKeys.cx}`
        ),
    }),
    getSearchesPhotos: builder.query({
      query: (args: PayloadType) =>
        createRequest(
          `/v1?q=${args.q}&start=${args.start}&searchType=${args.searchType}&key=${apiKeys.key}&cx=${apiKeys.cx}`
        ),
    }),
  }),
});

export const { useGetSearchesQuery, useGetSearchesPhotosQuery } = searchApi;
