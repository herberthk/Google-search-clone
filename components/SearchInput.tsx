import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState, KeyboardEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
  const router = useRouter();
  const { query } = router;
  const [searchQuery, setSearchQuery] = useState(query.query || "");
  // console.log("query", router);
  const searchQueryHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      router.push(`/${searchQuery}/${1}`);
    }
  };
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div
      id="searchBox"
      className="flex h-[46px] w-full items-center gap-3 rounded-3xl border border-[#dfe1e5] px-4 transition-all focus-within:border-0 focus-within:shadow-md hover:border-0 hover:bg-white hover:shadow-md md:w-[584px]"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        ref={ref}
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        className="grow text-black/[0.87] outline-0"
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <div className="relative h-6 w-6 cursor-pointer">
          <Image src="/assets/mic.svg" alt="" fill />
        </div>
        <div className="relative h-6 w-6 cursor-pointer">
          <Image src="/assets/image.svg" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
