import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/customsearch/v1";

export const params = {
  // key: process.env.GOOGLE_SEARCH_API_KEY,
  // cx: process.env.GOOGLE_SEARCH_API_KEY,
  key: "AIzaSyB7ttR5CRYuOAHNoJdZL2oz670s0-0I12c",
  cx: "6446cfb0919634959",
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
