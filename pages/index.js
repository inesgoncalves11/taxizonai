import Head from "next/head";
import Home from "../components/home/home";
import About from "../components/about/about";
import Services from "../components/services/services";
import Banner from "../components/banner/banner";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Táxis Zona I</title>
      </Head>
      <main>
        <Banner title="Tours & transfers" />
        <Home></Home>

        <About></About>
        <Services></Services>
      </main>
    </>
  );
}
