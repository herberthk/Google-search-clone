import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
interface ContextType {
  imageSearch: boolean;
  newsSearch: boolean;
  setImageSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setNewsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  videoSearch: boolean;
  setVideoSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
const Context = createContext<ContextType>({
  imageSearch: false,
  newsSearch: false,
  setImageSearch: () => {},
  setNewsSearch: () => {},
  videoSearch: false,
  setVideoSearch: () => {},
});
interface Props {
  children: ReactNode;
}

export const AppContext: FC<Props> = ({ children }) => {
  const [imageSearch, setImageSearch] = useState(false);
  const [newsSearch, setNewsSearch] = useState(false);
  const [videoSearch, setVideoSearch] = useState(false);

  const memoizedValues = useMemo(
    () => ({
      imageSearch,
      newsSearch,
      videoSearch,
      setImageSearch,
      setNewsSearch,
      setVideoSearch,
    }),
    [imageSearch, newsSearch, videoSearch]
  );

  return <Context.Provider value={memoizedValues}>{children}</Context.Provider>;
};

export const useSearch = () => useContext(Context);
