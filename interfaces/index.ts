export interface ImageResult {
  image: {
    contextLink: string;
  };
  link: string;
  title: string;
  displayLink: string;
}
export interface ItemResult {
  htmlSnippet: string;
  link: string;
  title: string;
  formattedUrl: string;
}
export interface TypeQuery {
  queries: {
    previousPage: {
      startIndex: number;
    }[];
    nextPage: {
      startIndex: number;
    }[];
  };
}
export interface Results extends TypeQuery {
  items: ImageResult[] | ItemResult[];
  searchInformation: {
    formattedSearchTime: number;
    formattedTotalResults: string;
    searchTime: number;
    totalResults: string;
  };
}

export interface PageProps {
  data: Results;
  error?: string;
  isLoading: boolean;
}
