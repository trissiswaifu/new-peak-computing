import React from "react";
import { Footer } from "./Footer";
import { NavMenu } from "./NavMenu";
import "../../src/styles/global.css";

//TODO change from css to tailwind
export const Layout = ({ children }) => {
  return (
    <>
      {/* <Global
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
      /> */}
      <NavMenu />
      {children}
      <Footer />
    </>
  );
};
