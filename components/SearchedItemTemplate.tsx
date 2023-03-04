import { FC } from "react";
import { ItemResult } from "../interfaces";

const SearchedItemTemplate: FC<ItemResult> = ({
  formattedUrl,
  htmlSnippet,
  link,
  title,
}) => {
  function createMarkup(html: string) {
    return { __html: html };
  }

  return (
    <div className="flex max-w-[700px] flex-col py-3">
      <div
        role="button"
        tabIndex={0}
        className="group cursor-pointer"
        onClick={() => window.open(link, "_blank")}
        onKeyDown={() => {}}
      >
        <div className="truncate text-sm text-[#202124]">{formattedUrl}</div>
        <div className="pt-2 text-xl text-[#1a0dab] group-hover:underline">
          {title}
        </div>
      </div>
      <div
        className="pt-1 text-sm leading-6 text-[#4d5156]"
        dangerouslySetInnerHTML={createMarkup(htmlSnippet)}
      />
    </div>
  );
};

export default SearchedItemTemplate;
