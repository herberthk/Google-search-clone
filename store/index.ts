import { create } from "zustand";
import { ImageResult } from "../interfaces";
interface BearState {
  imageSearch: boolean;
  loading: boolean;
  results: ImageResult[];
  setResults: (data: ImageResult[]) => void;
  setImageSelected: (data: boolean) => void;
  setLoading: (data: boolean) => void;
}

// Global state for school to be donated to and amount to donate
const useSearchStore = create<BearState>((set) => ({
  imageSearch: false,
  results: [],
  loading: false,
  setLoading: (data) => set({ loading: data }),
  setImageSelected: (data) => set({ imageSearch: data }),
  setResults: (data) => set({ results: [...data] }),
}));

export default useSearchStore;
