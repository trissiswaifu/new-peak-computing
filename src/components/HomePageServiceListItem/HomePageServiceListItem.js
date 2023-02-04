import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { navigate } from "gatsby";

export const HomePageServiceListItem = ({ service, url }) => {
  return (
    <motion.li
      whileHover={{
        transition: { duration: 0.15 },
        scale: 1.025,
      }}
      whileTap={{
        transition: { duration: 0.15 },
        scale: 1.025,
      }}
      onClick={() => navigate(url)}
      className="flex  flex-row items-center gap-2 pb-1 shadow hover:cursor-pointer hover:text-gray-600 hover:shadow-none  dark:shadow-lg"
    >
      <span className="rounded:sm bg-cyan-800 p-2  text-gray-50">
        <BsArrowRight />
      </span>
      <span className="text-lg ">{service}</span>
    </motion.li>
  );
};
