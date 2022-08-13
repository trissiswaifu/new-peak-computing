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
            margin: 0;
            padding: 0;
            overflow-x: hidden;
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
