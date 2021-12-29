import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "../styles/globals.css";

const breakpoints = createBreakpoints({
  sm: "414px",
  md: "768px",
  lg: "1366px",
  xl: "1920px",
});

const defaultTheme = {
  ...breakpoints,
  colors: {
    black: {
      50: "#c8c6e6",
      100: "#a5a2d7",
      200: "#817cc8",
      300: "#5d56ba",
      400: "#453ea2",
      500: "#35307d",
      600: "#262258",
      700: "#171536",
      800: "#070713",
      900: "#0D0C22",
    },
    purple: {
      50: "#eae4ff",
      100: "#c1b2ff",
      200: "#9880ff",
      300: "#6f4dff",
      400: "#471bfe",
      500: "#2d01e5",
      600: "#2300b3",
      700: "#180081",
      800: "#0d004f",
      900: "#050020",
    },
    gray: {
      50: "#fbf0f2",
      100: "#dcd8d9",
      200: "#bfbfbf",
      250: "#cbcbcb",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#282626",
      900: "#150a0d",
    },
  },
  textStyles: {
    h1: {
      fontFamily: "Nunito Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: ["48px", "64px"],
      lineHeight: ["48px", "64px"],
      letterSpacing: ["-0.02em"],
    },
    h2: {
      fontFamily: "Nunito Sans",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: ["24px"],
      lineHeight: ["32px"],
      letterSpacing: ["-0.02em"],
    },
    h3: {
      fontFamily: "Nunito Sans",
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: ["32px", "36px"],
      lineHeight: ["48px"],
      letterSpacing: ["-0.02em"],
    },
    h4: {
      fontFamily: "Nunito Sans",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: ["24px"],
      lineHeight: ["32px"],
      letterSpacing: ["-0.02em"],
    },
    cardT: {
      fontFamily: "Nunito Sans",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: ["16px"],
      lineHeight: ["22px"],
      letterSpacing: ["-0.02em"],
    },
    cardC: {
      fontFamily: "Nunito Sans",
      fontStyle: "normal",
      fontWeight: "200",
      fontSize: ["16px"],
      lineHeight: ["22px"],
      letterSpacing: ["-0.02em"],
    },
    a: {
      fontFamily: "Nunito Sans",
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: ["16px"],
      lineHeight: ["22px"],
      letterSpacing: ["-0.02em"],
    },
    btn: {
      fontFamily: "Nunito Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: ["24px"],
      lineHeight: ["24px"],
      letterSpacing: ["-0.02em"],
    },
    placeholder: {
      fontFamily: "Nunito Sans",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: ["16px"],
      lineHeight: ["22px"],
      letterSpacing: ["-0.02em"],
    },
  },
};

const theme = extendTheme({ ...defaultTheme });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
