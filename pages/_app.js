import "../styles/globals.css";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
