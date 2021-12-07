import type { NextPage } from "next";
import Head from "next/head";
import { Intro } from "../components/intro";
import { Container } from "../components/layouts";
import { Navbar } from "../components/navigation";
import { ProductInfo } from "../sections/products";
import { Content } from "../sections/we-are-game-fanatics";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>rounds</title>
        <meta name="description" content="Earn crypto as you play" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container>
        <Intro />
        <Content />
      </Container>

      <ProductInfo />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
