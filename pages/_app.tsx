import "../styles/globals.css";
import type { AppProps } from "next/app";
import { setup } from "goober";
import { createElement } from "react";

setup(createElement);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
