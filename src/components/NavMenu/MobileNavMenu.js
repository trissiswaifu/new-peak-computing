import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useState } from "react";
import { NavMenuSampleDropdown } from "./NavMenuSampleDropdown";
import { NavMenuServicesDropdown } from "./NavMenuServicesDropdown";

export const MobileNavMenu = () => {
  const [open, setOpen] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-2"
        onClick={handleClick}
      >
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          animate={isClicked ? { rotate: 45, y: 9 } : { x: 0, opacity: 1 }}
          //mountain close button
          // animate={
          //   isClicked ? { rotate: -60, y: 6, x: -7 } : { x: 0, opacity: 1 }
          // }

          className="h-0.5 w-7 bg-gray-50"
        />
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          className="h-0.5 w-7 bg-gray-50"
          animate={isClicked ? { x: 0, opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.15 }}
          //mountain close button
          // animate={
          //   isClicked ? { rotate: 60, y: -4, x: 8 } : { x: 0, opacity: 1 }
          // }
        />
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          animate={isClicked ? { rotate: -45, y: -9 } : { x: 0, opacity: 1 }}
          //mountain close button
          // animate={isClicked ? { y: 0 } : { x: 0, opacity: 1 }}

          className="h-0.5 w-7 bg-gray-50"
        />
      </div>
      <AnimatePresence>
        {isClicked && (
          <motion.div
            animate={{ width: 300 }}
            exit={{ width: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute flex flex-col bg-gray-300 text-cyan-900 p-2 right-0 top-full gap-3 z-50"
          >
            <Link
              className="text-gray-50 decoration-0 font-mono text-base opacity-[150%] xl:text-lg hover:opacity-80"
              to="/"
            >
              Home
            </Link>
            <NavMenuServicesDropdown />
            <NavMenuSampleDropdown />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
