import React, { FC, useEffect, useState } from "react";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import Pagination from "./Pagination";
import { ImageResult, PageProps } from "../interfaces";
import useSearchStore from "../store";
import { useRouter } from "next/router";
import { BASE_URL, params, PayloadType } from "../utils/api";
import axios from "axios";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";

const SearchResult: FC<PageProps> = ({ data, error }) => {
  const router = useRouter();
  const { query, startIndex } = router.query;
  const imageSearch = useSearchStore((state) => state.imageSearch);
  // const results = useSearchStore((state) => state.results);
  // const setResults = useSearchStore((state) => state.setResults);
  const [results, setResults] = useState<ImageResult[]>([]);

  useEffect(() => {
    // console.log("image search", imageSelected);
    // return () => setImageSelected(false);
    if (imageSearch) {
      getImages();
    }
  }, [imageSearch]);

  useEffect(() => {
    // console.log("results", results);
  }, [results]);

  const getImages = async () => {
    const payload: PayloadType = { q: query, start: startIndex };
    payload.searchType = "image";
    try {
      const imageResult = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
      });
      setResults(imageResult.data.items);
      // setQuotaLimit(null);
      // setResult((prev)=>);

      // console.log("data", imageResult.data.items);
    } catch (error) {}
  };

  if (error) {
    return (
      <div className=" flex min-h-[100vh] flex-col">
        <SearchResultHeader />
        <h1 className="mx-auto mt-8 text-xl">
          Sorry {error} so try again later, Thank you
        </h1>
      </div>
    );
  }

  const { items, queries, searchInformation } = data;

  return (
    <div className=" flex min-h-[100vh] flex-col">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:ml-[8rem] md:pr-5 md:pl-20 ">
        <div className="mb-3 flex text-sm text-[#70757a]">{`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}</div>
        {!imageSearch ? (
          <>
            {items?.map((item, index: number) => (
              <SearchedItemTemplate key={index} {...item} />
            ))}
          </>
        ) : (
          <div className="xl:grid-cols-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {results?.map((item, index) => (
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
