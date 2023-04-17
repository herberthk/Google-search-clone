import { FC, useEffect } from "react";
import ReactPlaceholder from "react-placeholder/lib";
import { RectShape } from "react-placeholder/lib/placeholders";
import { useGetSearchesPhotosQuery } from "../services/searchApi";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";

type Props = {
  q: string | string[];
  start: string | string[];
};

const PhotoResults: FC<Props> = ({ q, start }) => {
  const { data, isLoading } = useGetSearchesPhotosQuery({
    q,
    start,
    searchType: "image",
  });
  useEffect(() => {}, [q, start]);

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
    <ReactPlaceholder
      showLoadingAnimation={true}
      ready={!isLoading}
      customPlaceholder={PlaceHolder}
    >
      {data?.items?.map((item, index) => (
        <SearchedImageItemTemplate key={index} {...item} />
      ))}
    </ReactPlaceholder>
  );
};

export default PhotoResults;
