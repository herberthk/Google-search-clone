import { FC } from "react";
import { ImageResult } from "../interfaces";

const SearchedImageItemTemplate: FC<ImageResult> = ({
  displayLink,
  image,
  link,
  title,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="group flex cursor-pointer flex-col py-3"
      onClick={() => window.open(image.contextLink, "_blank")}
      onKeyDown={() => {}}
    >
      <div className="group-hover:shadow-c h-[100px] w-[100px] overflow-hidden rounded-xl bg-black/[0.03] md:h-[120px] lg:h-[140px] lg:w-[140px]">
        {/* <Image
          className="h-full w-full object-contain"
          src={link}
          alt={title}
          fill
        /> */}
        {
          // I decided not to use the next/image because it requires adding domains to next.config.js but since these images are dynamic depending on search term it makes it difficult to achieve this
        }
        <img className="h-full w-full object-contain" src={link} alt={title} />
      </div>
      <div className="pt-2 text-xs text-[#70757a]">{displayLink}</div>
      <div className="truncate pt-1 text-sm text-[#3c4043] group-hover:underline">
        {title}
      </div>
    </div>
  );
};

export default SearchedImageItemTemplate;
