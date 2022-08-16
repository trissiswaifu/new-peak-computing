import { css, Global, ThemeProvider } from "@emotion/react";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const theme = {
  colors: {
    primary: {
      light: "#357a92",
      main: "hsl(195, 97%, 24%)",
      dark: "#02475f",
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
            width: 100%;
            height: 100%;
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
