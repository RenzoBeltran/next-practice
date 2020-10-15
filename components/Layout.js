import { Children } from "react";
import Navigation from "./Navigation";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJs Project</title>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css'
        />
      </Head>
      <Navigation />
      <div className='container p-4'> {children}</div>
    </>
  );
};

export default Layout;
