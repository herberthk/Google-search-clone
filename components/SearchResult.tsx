import React, { useState, useEffect } from "react";

import { BASE_URL, params, PayloadType } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import SearchedImageItemTemplate, {
  ImageResult,
} from "./SearchedImageItemTemplate";
import Pagination, { TypeQuery } from "./Pagination";
import { useSearch } from "../utils/ContextApi";
import { useRouter } from "next/router";
import axios from "axios";

interface Results extends TypeQuery {
  items: ImageResult[];
  searchInformation: {
    formattedSearchTime: number;
    formattedTotalResults: string;
    searchTime: number;
    totalResults: string;
  };
}
const SearchResult = () => {
  const [result, setResult] = useState<Results>(null);
  const [quotaLimit, setQuotaLimit] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { query, startIndex } = router.query;
  const { imageSearch } = useSearch();

  useEffect(() => {
    if (query && setResult) {
      fetchSearchResults();
    }

    window.scrollTo(0, 0);
  }, [query, startIndex, imageSearch]);

  const fetchSearchResults = async () => {
    if (!query || !startIndex) {
      return;
    }
    const payload: PayloadType = { q: query, start: startIndex };

    if (imageSearch) {
      payload.searchType = "image";
    }
    setLoading(true);
    try {
      const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
      });
      setQuotaLimit(null);
      setResult(data);
    } catch (error: any) {
      // console.log(error);
      if (error.code === "ERR_BAD_REQUEST") {
        setQuotaLimit(error.response.data.error.message.slice(0, 80));
      }
      if (error.code === "ERR_NETWORK") {
        setQuotaLimit("No internet connection");
      }
      // console.log(error.code);
      // console.log(error.response.data.error.message.slice(0, 80));
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;

  if (quotaLimit) {
    return (
      <div className=" flex min-h-[100vh] flex-col">
        <SearchResultHeader />
        <h1 className="mx-auto mt-8 text-xl">
          Sorry {quotaLimit} so try again later, Thank you
        </h1>
      </div>
    );
  }

  if (!loading && !result) {
    return null;
  }
  const { items, queries, searchInformation } = result;

  return (
    <div className=" flex min-h-[100vh] flex-col">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:ml-[8rem] md:pr-5 md:pl-20 ">
        <div className="mb-3 flex text-sm text-[#70757a]">{`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}</div>
        {!imageSearch ? (
          <>
            {items.map((item: any, index: number) => (
              <SearchedItemTemplate key={index} {...item} />
            ))}
          </>
        ) : (
          <div className="xl:grid-cols-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {items.map((item, index) => (
              <SearchedImageItemTemplate key={index} {...item} />
            ))}
          </div>
        )}
        <Pagination queries={queries} />
      </main>
      <Footer />
    </div>
  );
};

export default SearchResult;
