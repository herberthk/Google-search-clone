import type { AppType } from "next/app";
import "react-placeholder/lib/reactPlaceholder.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
const App: AppType = ({ Component, pageProps }) => {
  // const [loading, setLoading] = React.useState(false);
  // React.useEffect(() => {
  //   const start = () => {
  //     console.log("start");
  //     setLoading(true);
  //   };
  //   const end = () => {
  //     console.log("findished");
  //     setLoading(false);
  //   };
  //   Router.events.on("routeChangeStart", start);
  //   Router.events.on("routeChangeComplete", end);
  //   Router.events.on("routeChangeError", end);
  //   return () => {
  //     Router.events.off("routeChangeStart", start);
  //     Router.events.off("routeChangeComplete", end);
  //     Router.events.off("routeChangeError", end);
  //   };
  // }, []);
  return (
    <Provider store={store}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
