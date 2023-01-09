import React from "react";
import { Footer } from "./Footer";
import { NavMenu } from "./NavMenu";
import "../../src/styles/global.css";

export const Layout = ({ children }) => {
  return (
    <>
      <NavMenu />
      {children}
      <Footer />
    </>
  );
};
