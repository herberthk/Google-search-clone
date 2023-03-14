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
import { RectShape } from "react-placeholder/lib/placeholders";
import ReactPlaceholder from "react-placeholder";

const SearchResult: FC<PageProps> = ({ data, error }) => {
  const router = useRouter();
  const { query, startIndex } = router.query;
  const imageSearch = useSearchStore((state) => state.imageSearch);
  // const results = useSearchStore((state) => state.results);
  // const setResults = useSearchStore((state) => state.setResults);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      const imageResult = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
      });
      setResults(imageResult.data.items);
      // setQuotaLimit(null);
      // setResult((prev)=>);

      // console.log("data", imageResult.data.items);
    } catch (error) {
    } finally {
      setLoading(false);
    }
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

  const PlaceHolder = (
    <>
      {[...Array(12)].map((_, i) => (
        <RectShape
          key={i}
          color="#E0E0E0"
          style={{ width: 200, height: 150 }}
        />
      ))}
    </>
  );

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
            <ReactPlaceholder
              showLoadingAnimation={true}
              ready={!loading}
              customPlaceholder={PlaceHolder}
            >
              {results?.map((item, index) => (
                <SearchedImageItemTemplate key={index} {...item} />
              ))}
            </ReactPlaceholder>
          </div>
        )}
        <Pagination queries={queries} />
      </main>
      <Footer />
    </div>
  );
};

export default SearchResult;
