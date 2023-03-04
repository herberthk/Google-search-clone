import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { TypeQuery } from "../interfaces";
import { pagination } from "../utils/constants";

const Pagination: FC<TypeQuery> = ({ queries }) => {
  const router = useRouter();
  const {
    query: { query },
  } = router;
  const [page, setPage] = useState(pagination[0].startIndex);

  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);

  const paginationClickHandler = (startIndex: number) => {
    setPage(startIndex);
    router.push(`/${query}/${startIndex}`);
  };

  return (
    <div className="flex max-w-[700px] flex-col items-center py-14">
      <div className="relative text-[#4285f4]">
        {queries.previousPage && (
          <div
            className="absolute left-[-30px] top-[10px] md:left-[-40px]"
            onClick={() =>
              paginationClickHandler(queries.previousPage[0].startIndex)
            }
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
          >
            <FiChevronLeft size={20} className="cursor-pointer" />
            <span className="absolute left-[-5px] top-[30px] hidden cursor-pointer md:block">
              Prev
            </span>
          </div>
        )}
        <div className="relative h-[42px] w-[250px] md:w-[300px]">
          <Image alt="Logo" src="/assets/google-pagination-logo.png" fill />
        </div>

        {queries.nextPage && (
          <div
            className="absolute right-[-30px] top-[10px] md:right-[-40px]"
            onClick={() =>
              paginationClickHandler(queries.nextPage[0].startIndex)
            }
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
          >
            <FiChevronRight size={20} className="cursor-pointer" />
            <span className="absolute left-[-5px] top-[30px] hidden cursor-pointer md:block">
              Next
            </span>
          </div>
        )}
      </div>
      <div className="flex gap-3 text-sm text-[#4285f4]">
        {pagination.map((p) => (
          <span
            role="button"
            onKeyDown={() => {}}
            tabIndex={0}
            key={p.page}
            onClick={() => paginationClickHandler(p.startIndex)}
            className={`cursor-pointer ${
              page === p.startIndex ? "text-black" : ""
            }`}
          >
            {p.page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
