import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/customsearch/v1";

export const params = {
  key: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY,
  cx: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY,
};

export interface PayloadType {
  q?: string | string[];
  start?: string | string[];
  searchType?: string;
}

export const fetchDataFromApi = async (payload: PayloadType) => {
  // console.log("params:", params);
  try {
    const { data } = await axios.get(BASE_URL, {
      params: { ...params, ...payload },
    });
    return data;
  } catch (error) {}
};
