import type { NextPage } from "next";
import Head from "next/head";
import { Intro } from "../components/intro";
import { Navbar } from "../components/navigation";
import { OnBoarding } from "../sections/on-boarding";
import { ProductInfo } from "../sections/products";
import { Content } from "../sections/we-are-game-fanatics";
import { Footer } from "../sections/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Grounds</title>
        <meta name="description" content="Earn crypto as you play" />
        <meta name="keywords" content="crypto, gaming, league of legends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Intro />
      <Content />
      <ProductInfo />
      <OnBoarding />
      <Footer />
    </div>
  );
};

export default Home;
