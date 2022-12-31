import React from "react";
import { Footer } from "./Footer";
import { NavMenu } from "./NavMenu";
import "../../src/styles/global.css";

//TODO change from css to tailwind
export const Layout = ({ children }) => {
  return (
    <>
      <NavMenu />
      {children}
      <Footer />
    </>
  );
};
