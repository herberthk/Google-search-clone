import React, { FC, useEffect } from "react";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItemTemplate from "./SearchedItemTemplate";
import Pagination from "./Pagination";
import { PageProps } from "../interfaces";
import { useSearchStore } from "../store";
import { useRouter } from "next/router";

import ReactPlaceholder from "react-placeholder";
import PhotoResults from "./PhotoResults";

const SearchResult: FC<PageProps> = ({ data, isLoading }) => {
  const router = useRouter();
  const imageSearch = useSearchStore((state) => state.imageSearch);

  useEffect(() => {}, [imageSearch]);

  return (
    <div className=" flex min-h-[100vh] flex-col">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:ml-[8rem] md:pr-5 md:pl-20 ">
        <div className="mb-3 flex text-sm text-[#70757a]">{`About ${data?.searchInformation.formattedTotalResults} results in (${data?.searchInformation.formattedSearchTime})`}</div>
        {!imageSearch ? (
          <ReactPlaceholder type="text" rows={23} ready={!isLoading}>
            {data?.items?.map((item, index: number) => (
              <SearchedItemTemplate key={index} {...item} />
            ))}
          </ReactPlaceholder>
        ) : (
          <div className="xl:grid-cols-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <PhotoResults
              q={router.query?.query}
              start={router.query?.startIndex}
            />
          </div>
        )}
        <Pagination queries={data?.queries} />
      </main>
      <Footer />
    </div>
  );
};

export default SearchResult;
