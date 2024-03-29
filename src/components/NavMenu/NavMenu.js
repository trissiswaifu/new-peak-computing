import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NewPeakComputingLogo } from "../NewPeakComputingLogo";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { navigate } from "gatsby";
import { NavList } from "./NavList";
import PhoneNavMenu from "./PhoneNavMenu";
import TabletNavMenu from "./TabletNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isPhone = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <nav>
      {isPhone && <PhoneNavMenu />}
      {isTablet && !isPhone && <TabletNavMenu />}
      {isDesktop && <DesktopNavMenu />}
      {/* <div className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-gray-800 bg-gray-100 pr-2 dark:border-slate-400 dark:bg-cyan-900">
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
            className=" h-0.5 w-8 bg-gray-900 dark:bg-gray-50"
          />
          <motion.span
            initial={{ x: 0, opacity: 1 }}
            className="h-0.5 w-8 bg-gray-900 dark:bg-gray-50"
            animate={menuOpen ? { x: 50, opacity: 1 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            initial={{ x: 0, opacity: 1 }}
            animate={
              menuOpen ? { rotate: -45, y: -9 } : { x: 0, opacity: 1 }
            }
            className=" h-0.5 w-8 bg-gray-900 dark:bg-gray-50"
          />
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded:sm absolute right-0 top-full max-w-md bg-gray-100 p-2 dark:bg-gray-800"
            >
              <NavList />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    ) : (
      <NavList />
    )}
  </div> */}
    </nav>
  );
};
