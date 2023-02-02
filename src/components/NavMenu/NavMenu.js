import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NewPeakComputingLogo } from "../NewPeakComputingLogo";
import { BsChevronLeft } from "react-icons/bs";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AiOutlineDown } from "react-icons/ai";

import { Link, navigate } from "gatsby";

import { NavList } from "./NavList";

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      {/* <div className="sticky top-0 pr-2 flex justify-between items-center bg-cyan-900 border-b-2 border-gray-50 z-50">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="hover:cursor-pointer"
        >
          <NewPeakComputingLogo className="pl-0" width={75} />
        </div>
        {isMobile ? <MobileNavMenu /> : <DesktopNavMenu />}
      </div> */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-gray-50 bg-cyan-900 dark:bg-slate-400 pr-2">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="ml-1 hover:cursor-pointer"
        >
          <NewPeakComputingLogo className="pl-0" width={75} />
        </div>
        {isMobile ? (
          <>
            <div
              className="flex flex-col items-center justify-center gap-2 lg:hidden"
              onClick={toggleMenu}
            >
              <motion.span
                initial={{ x: 0, opacity: 1 }}
                animate={
                  menuOpen ? { rotate: 45, y: 11 } : { x: 0, opacity: 1 }
                }
                className=" h-0.5 w-8 bg-gray-50"
              />
              <motion.span
                initial={{ x: 0, opacity: 1 }}
                className="h-0.5 w-8 bg-gray-50"
                animate={menuOpen ? { x: 0, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                initial={{ x: 0, opacity: 1 }}
                animate={
                  menuOpen ? { rotate: -45, y: -9 } : { x: 0, opacity: 1 }
                }
                className=" h-0.5 w-8 bg-gray-50"
              />
            </div>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.35 }}
                  className="rounded:sm absolute right-0 top-full max-w-md bg-gray-50 p-2"
                >
                  <NavList />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <NavList />
        )}
      </div>
    </nav>
  );
};
