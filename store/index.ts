import { create } from "zustand";

import { setupListeners } from "@reduxjs/toolkit/query/react";

import { searchApi } from "../services/searchApi";
import { configureStore } from "@reduxjs/toolkit";
interface BearState {
  imageSearch: boolean;

  setImageSelected: (data: boolean) => void;
}

// Global state for school to be donated to and amount to donate
export const useSearchStore = create<BearState>((set) => ({
  imageSearch: false,
  results: [],
  loading: false,
  setImageSelected: (data) => set({ imageSearch: data }),
}));

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [searchApi.reducerPath]: searchApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
export default store;
