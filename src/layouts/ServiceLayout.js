import React from "react";
import { motion } from "framer-motion";

export const ServiceLayout = ({ children }) => {
  return (
    <motion.main exit={{ x: -100 }} className="max-w-6xl flex flex-col">
      <div className="bg-gray-100 py-2 px-1 flex flex-column items-center gap-8">
        {children}
      </div>
    </motion.main>
  );
};
