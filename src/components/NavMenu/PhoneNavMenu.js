import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { NewPeakComputingLogo } from "../NewPeakComputingLogo";
import NavList from "./NavList";

const PhoneNavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-gray-700 bg-gray-100 p-2 pr-2 dark:border-slate-400 dark:bg-cyan-900">
      <NewPeakComputingLogo className="pl-0" width={75} />
      <div
        className="flex flex-col items-center justify-center gap-2 lg:hidden"
        onClick={toggleMenu}
      >
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          animate={menuOpen ? { rotate: 315, y: 11 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
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
          transition={{ duration: 0.75 }}
          animate={menuOpen ? { rotate: -315, y: -9 } : { x: 0, opacity: 1 }}
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
    </div>
  );
};

export default PhoneNavMenu;
