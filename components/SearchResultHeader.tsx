import React, { useState } from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { menu } from "../utils/constants";
import Link from "next/link";
import { useSearchStore } from "../store";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const setImageSelected = useSearchStore((state) => state.setImageSelected);

  const clickHandler = (name: string) => {
    setSelectedMenu(name);
    const isTypeImage = name === "Images";
    setImageSelected(isTypeImage);
  };

  return (
    <div className="sticky top-0 flex flex-col items-center border-b border-[#ebebeb] bg-white p-[15px] pb-0  md:block md:pr-5 md:pl-20 md:pt-7">
      <div className="flex w-full items-center justify-between">
        <div className="flex grow items-center">
          <Link href="/">
            <span className="relative mr-10 hidden h-[32px] w-[92px] md:block">
              <Image src="/assets/google-logo.png" alt="Logo" fill />
            </span>
          </Link>
          <SearchInput
          // from="searchResult"
          />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>

      <div className="ml-[-12px] mt-3 mb-4 flex md:ml-[7rem]">
        {menu.map(({ Icon, name }, index) => (
          <button
            key={index}
            className={`relative flex cursor-pointer items-center p-3 text-[#5f6368] ${
              selectedMenu === name ? "text-[#1a73e8]" : ""
            }`}
            onClick={() => clickHandler(name)}
          >
            <span className="mr-2 hidden md:block">{<Icon />}</span>
            <span className="text-sm">{name}</span>
            {selectedMenu === name && (
              <span className="absolute bottom-0 left-[10px] h-[3px] w-[calc(100%-20px)] bg-[#1a73e8]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
