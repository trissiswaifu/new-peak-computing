import React from "react";
import { motion } from "framer-motion";
import { useTheme, css } from "@emotion/react";

export const ServiceLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <motion.main
      css={css`
        max-width: 1200px;
        display: flex;
        flex-direction: column;
      `}
      exit={{ x: -100 }}
    >
      <div
        css={css`
          background-color: ${theme.colors.grey[100]};
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        `}
      >
        {children}
      </div>
    </motion.main>
  );
};
