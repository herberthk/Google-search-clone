import Head from "next/head";
import { FC } from "react";
interface Props {
  title?: string;
  keywords?: string;
  description?: string;
}
const Meta: FC<Props> = ({
  title = "Google search clone",
  keywords = "AI, Search, Google, Herbert Kavuma",
  description = "This is the clone of world's largest search search engine",
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
