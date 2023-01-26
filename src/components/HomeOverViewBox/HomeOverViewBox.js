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
      className="flex flex-col px-2 gap-2 max-w-md"
    >
      <p className="p-6 text-gray-700 dark:text-gray-100 text-left text-base">
        {children}
      </p>
      <button
        onClick={() => {
          handleClick(url);
        }}
        className="mr-4 self-end align bg-cyan-600 text-gray-200 font-semibold px-4 py-2 active:text-gray-50 hover:text-gray-50 active:shadow-md hover:bg-cyan-700 hover:shadow-md"
      >
        {textButton}
      </button>
    </motion.div>
    // </motion.div>
  );
};
