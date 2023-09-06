import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/footer/footer";
import ScrollToTop from "../components/go-to-top/go-to-top";
import Navbar from "../components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
      <Component {...pageProps} />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default MyApp;
