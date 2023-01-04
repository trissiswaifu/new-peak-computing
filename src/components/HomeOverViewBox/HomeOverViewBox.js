import { navigate } from "gatsby";
import React from "react";
import { motion } from "framer-motion";

export const HomeOverViewBox = ({ children, textButton, url }) => {
  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className=" min-h-[500px] md:min-h-[300px] flex justify-center"
    >
      <div className="pl-2 pr-2 flex flex-col gap-4 max-w-lg">
        <div className="flex gap-4 items-baseline mb-1 mt-2"></div>

        <p className="p-6 text-gray-700 text-left text-base">{children}</p>
        <button
          onClick={() => {
            handleClick(url);
          }}
          className=" mr-4 self-end align bg-cyan-600 text-gray-200 active:text-gray-50 p-4 w-40 lg:hover:text-gray-50 font-semibold active:shadow-md hover:shadow-md"
        >
          {textButton}
        </button>
      </div>
    </motion.div>
  );
};
