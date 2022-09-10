import { css, Global, ThemeProvider } from "@emotion/react";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

//cyan theme
const theme = {
  colors: {
    primary: {
      50: "#E0F7FA",
      100: "#B2EBF2",
      200: "#80DEEA",
      300: "#4DD0E1",
      400: "#26C6DA",
      500: "#00BCD4",
      600: "#00ACC1",
      700: "#0097A7",
      800: "#00838F",
      900: "#006064",
      A100: "#84FFFF",
      A200: "#18FFFF",
      A400: "#00E5FF",
      A700: "#00B8D4",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
};

export const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
              "Lucida Sans", Arial, sans-serif;
            width: 100%;
            height: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            background-color: hsl(0, 50%, 95%);
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          ::-webkit-scrollbar {
            width: 7px;
          }

          ::-webkit-scrollbar-track {
            background: hsl(0, 0%, 25%);
          }

          ::-webkit-scrollbar-thumb {
            background: hsl(195, 97%, 24%);
            border-radius: 0.5rem;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          button {
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};
