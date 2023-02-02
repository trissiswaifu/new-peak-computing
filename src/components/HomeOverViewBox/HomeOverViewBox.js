import { navigate } from "gatsby";
import React from "react";
import { motion } from "framer-motion";

export const HomeOverViewBox = ({ children, textButton, url }) => {
  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <motion.div
      transition={{ duration: 0.35 }}
      animate={{ opacity: 1, x: 0 }}
      initial={{ x: "200%", opacity: 0 }}
      className="flex max-w-md flex-col gap-2 px-2"
    >
      <p className="p-6 text-left text-base text-gray-700 dark:text-gray-100">
        {children}
      </p>
      <button
        onClick={() => {
          handleClick(url);
        }}
        className="align mr-4 self-end bg-cyan-600 px-4 py-2 font-semibold text-gray-200 hover:bg-cyan-700 hover:text-gray-50 hover:shadow-md active:text-gray-50 active:shadow-md"
      >
        {textButton}
      </button>
    </motion.div>
    // </motion.div>
  );
};
