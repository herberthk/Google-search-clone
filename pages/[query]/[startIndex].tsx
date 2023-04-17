import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import SearchResult from "../../components/SearchResult";
import SearchResultHeader from "../../components/SearchResultHeader";
import { useGetSearchesQuery } from "../../services/searchApi";

const Result = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetSearchesQuery({
    q: router.query?.query,
    start: router.query?.startIndex,
  });
  if (isError) {
    return (
      <>
        <Meta />
        <div className=" flex min-h-[100vh] flex-col">
          <SearchResultHeader />
          <h1 className="mx-auto mt-8 text-xl">
            {/* Sorry {error} so try again later, Thank you */}
            Sorry so try again later, Thank you
          </h1>
        </div>
      </>
    );
  }
  return <SearchResult data={data} isLoading={isLoading} />;
};

export default Result;

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   // console.log("server params", query);
//   const payload: PayloadType = { q: query.query, start: query.startIndex };
//   try {
//     const { data } = await axios.get(BASE_URL, {
//       params: { ...params, ...payload },
//     });
//     // console.log("data from server", data);
//     return { props: { data } };
//   } catch (error: any) {
//     // console.log("my error", error.response.data.error.message.slice(0, 80));

//     return {
//       props: { error: error.response.data.error.message.slice(0, 80) },
//     };
//     // console.log(error);
//     // if (error.code === "ERR_BAD_REQUEST") {
//     //   // setQuotaLimit(error.response.data.error.message.slice(0, 80));
//     // }
//     // if (error.code === "ERR_NETWORK") {
//     //   // setQuotaLimit("No internet connection");
//     // }
//     // console.log(error.code);
//     // console.log(error.response.data.error.message.slice(0, 80));
//   }
// };
