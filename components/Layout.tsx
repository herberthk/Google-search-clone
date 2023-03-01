// import React, { ReactNode } from "react";
// import Link from "next/link";
// import Head from "next/head";

// type Props = {
//   children?: ReactNode;
//   title?: string;
// };

// const Layout = ({ children, title = "This is the default title" }: Props) => (
//   <div>
//     <Head>
//       <title>{title}</title>
//       <meta charSet="utf-8" />
//       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//     </Head>
//     <header>
//       <nav>
//         <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
//         <Link href="/users">Users List</Link> |{" "}
//         <a href="/api/users">Users API</a>
//       </nav>
//     </header>
//     {children}
//     <footer>
//       <hr />
//       <span>I'm here to stay (Footer)</span>
//     </footer>
//   </div>
// );

// export default Layout;

// import { GetStaticProps, GetStaticPaths } from "next";

// import { User } from "../../interfaces";
// import { sampleUserData } from "../../utils/sample-data";
// import Layout from "../../components/Layout";
// import ListDetail from "../../components/ListDetail";

// type Props = {
//   item?: User;
//   errors?: string;
// };

// const StaticPropsDetail = ({ item, errors }: Props) => {
//   if (errors) {
//     return (
//       <Layout title="Error | Next.js + TypeScript Example">
//         <p>
//           <span style={{ color: "red" }}>Error:</span> {errors}
//         </p>
//       </Layout>
//     );
//   }

//   return (
//     <Layout
//       title={`${
//         item ? item.name : "User Detail"
//       } | Next.js + TypeScript Example`}
//     >
//       {item && <ListDetail item={item} />}
//     </Layout>
//   );
// };

// export default StaticPropsDetail;

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on users
//   const paths = sampleUserData.map((user) => ({
//     params: { id: user.id.toString() },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// };

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id;
//     const item = sampleUserData.find((data) => data.id === Number(id));
//     // By returning { props: item }, the StaticPropsDetail component
//     // will receive `item` as a prop at build time
//     return { props: { item } };
//   } catch (err: any) {
//     return { props: { errors: err.message } };
//   }
// };

// import { GetStaticProps } from "next";
// import Link from "next/link";

// import { User } from "../../interfaces";
// import { sampleUserData } from "../../utils/sample-data";
// import Layout from "../../components/Layout";
// import List from "../../components/List";

// type Props = {
//   items: User[];
// };

// const WithStaticProps = ({ items }: Props) => (
//   <Layout title="Users List | Next.js + TypeScript Example">
//     <h1>Users List</h1>
//     <p>
//       Example fetching data from inside <code>getStaticProps()</code>.
//     </p>
//     <p>You are currently on: /users</p>
//     <List items={items} />
//     <p>
//       <Link href="/">Go home</Link>
//     </p>
//   </Layout>
// );

// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const items: User[] = sampleUserData;
//   return { props: { items } };
// };

// export default WithStaticProps;

export {};
