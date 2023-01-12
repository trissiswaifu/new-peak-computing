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
      <div className="sticky top-0 pr-2 flex justify-between items-center bg-cyan-900 border-b-2 border-gray-50 z-50">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="hover:cursor-pointer ml-1"
        >
          <NewPeakComputingLogo className="pl-0" width={75} />
        </div>
        {isMobile ? (
          <>
            <div
              className="lg:hidden flex flex-col justify-center items-center gap-2"
              onClick={toggleMenu}
            >
              <motion.span
                initial={{ x: 0, opacity: 1 }}
                animate={
                  menuOpen ? { rotate: 45, y: 11 } : { x: 0, opacity: 1 }
                }
                //mountain close button
                // animate={
                //   toggleMenu ? { rotate: -60, y: 6, x: -7 } : { x: 0, opacity: 1 }
                // }

                className=" h-0.5 w-8 bg-gray-50"
              />
              <motion.span
                initial={{ x: 0, opacity: 1 }}
                className="h-0.5 w-8 bg-gray-50"
                animate={menuOpen ? { x: 0, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.15 }}
                //mountain close button
                // animate={
                //   toggleMenu ? { rotate: 60, y: -4, x: 8 } : { x: 0, opacity: 1 }
                // }
              />
              <motion.span
                initial={{ x: 0, opacity: 1 }}
                animate={
                  menuOpen ? { rotate: -45, y: -9 } : { x: 0, opacity: 1 }
                }
                //mountain close button
                // animate={toggleMenu ? { y: 0 } : { x: 0, opacity: 1 }}

                className=" h-0.5 w-8 bg-gray-50"
              />
            </div>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute bg-gray-50 rounded:sm p-2 right-0 top-full max-w-md"
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

      {/* <NavList /> */}

      {/* <NavigationMenu.Root className="">
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Content>
                <Link
                  className="text-gray-50 decoration-0 text-base xl:text-lg"
                  to="/"
                >
                  Home
                </Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger>
                <div className="flex items-center bg-inherit gap-1 xl:text-lg">
                  <span>Samples</span>
                  <BsChevronLeft className="text-gray-50" />
                </div>
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger />
              <NavigationMenu.Content>
                <NavigationMenu.Sub>
                  <NavigationMenu.List />
                  <NavigationMenu.Viewport />
                </NavigationMenu.Sub>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator />
          </NavigationMenu.List>

          <NavigationMenu.Viewport />
        </NavigationMenu.Root> */}
    </nav>
  );
};
