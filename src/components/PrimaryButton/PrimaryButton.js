import { useTheme, css } from "@emotion/react";
import { motion } from "framer-motion";
import React from "react";

export const PrimaryButton = ({ text }) => {
  const theme = useTheme();
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      css={css`
        background-color: ${theme.colors.primary[500]};
        color: ${theme.colors.grey[50]};
        padding: 1rem;
        border-radius: 0.25rem;
        &:hover {
          box-shadow: 0rem 0.1rem 0.25rem 0rem ${theme.colors.grey[500]};
        }
      `}
    >
      {text}
    </motion.button>
  );
};
