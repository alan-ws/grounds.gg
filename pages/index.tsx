import type { NextPage } from "next";
import Head from "next/head";
// import { Intro } from "../components/intro";
// import { Container } from "../components/layouts";
import { Navbar } from "../components/navigation";
// import { OnBoarding } from "../sections/on-boarding";
// import { ProductInfo } from "../sections/products";
import { Content } from "../sections/we-are-game-fanatics";
// import { Footer } from "../sections/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Grounds</title>
        <meta name="description" content="Earn crypto as you play" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* <Intro /> */}
      <Content />

      {/* <ProductInfo />

      <Container>
        <OnBoarding />
      </Container>

      <Footer /> */}
    </div>
  );
};

export default Home;
