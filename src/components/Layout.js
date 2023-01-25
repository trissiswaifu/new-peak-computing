import React from "react";
import { Footer } from "./Footer";
import { NavMenu } from "./NavMenu";
import "../../src/styles/global.css";

export const Layout = ({ children }) => {
  return (
    <body className="bg-gray-100 text-gray-800 dark:text-gray-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-slate-800 ">
      <NavMenu />
      {children}
      <Footer />
    </body>
  );
};
