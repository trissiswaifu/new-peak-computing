import React from "react";
import { motion } from "framer-motion";

export const ServiceLayout = ({ children }) => {
  return (
    <motion.main exit={{ x: -100 }} className="flex max-w-6xl flex-col">
      <div className="flex-column flex items-center gap-8 bg-gray-100 py-2 px-1">
        {children}
      </div>
    </motion.main>
  );
};
