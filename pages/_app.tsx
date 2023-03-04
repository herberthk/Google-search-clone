import { AppProps } from "next/app";
import "../styles/globals.css";
const App = ({ Component, pageProps }: AppProps) => {
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
  return <Component {...pageProps} />;
};

export default App;
