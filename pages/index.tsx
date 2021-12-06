import type { NextPage } from "next";
import Head from "next/head";
import { Dropdown } from "../components/dropdown";
import { Container } from "../components/layouts";
import { Navbar } from "../components/navigation";

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
        <main>
          <Dropdown />
        </main>

        <footer></footer>
      </Container>
    </div>
  );
};

export default Home;
