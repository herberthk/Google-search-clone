import axios from "axios";
import { GetServerSideProps } from "next";
import { FC } from "react";
import Meta from "../../components/Meta";
import SearchResult from "../../components/SearchResult";
import { PageProps } from "../../interfaces";
import { BASE_URL, params, PayloadType } from "../../utils/api";

const Result: FC<PageProps> = ({ data, error }) => {
  // console.log("error from client", error);
  return (
    <>
      <Meta />
      <SearchResult data={data} error={error} />
    </>
  );
};

export default Result;

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // console.log("server params", query);
  const payload: PayloadType = { q: query.query, start: query.startIndex };
  try {
    const { data } = await axios.get(BASE_URL, {
      params: { ...params, ...payload },
    });
    // console.log("data from server", data);
    return { props: { data } };
  } catch (error: any) {
    // console.log("my error", error.response.data.error.message.slice(0, 80));

    return {
      props: { error: error.response.data.error.message.slice(0, 80) },
    };
    // console.log(error);
    // if (error.code === "ERR_BAD_REQUEST") {
    //   // setQuotaLimit(error.response.data.error.message.slice(0, 80));
    // }
    // if (error.code === "ERR_NETWORK") {
    //   // setQuotaLimit("No internet connection");
    // }
    // console.log(error.code);
    // console.log(error.response.data.error.message.slice(0, 80));
  }
};
