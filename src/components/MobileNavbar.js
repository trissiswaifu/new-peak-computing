import { css, useTheme } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const bars = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0.5rem; */
  gap: 0.5rem;
`;

const bar = css`
  height: 1px;
  width: 30px;
  background-color: white;
`;
export const MobileNavbar = () => {
  const theme = useTheme();
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
      <div css={bars} onClick={handleClick}>
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          animate={isClicked ? { rotate: 45, y: 9 } : { x: 0, opacity: 1 }}
          css={bar}
        />
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          css={bar}
          animate={isClicked ? { x: 20, opacity: 0 } : { x: 0, opacity: 1 }}
        />
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          animate={isClicked ? { rotate: -45, y: -9 } : { x: 0, opacity: 1 }}
          css={bar}
        />
      </div>
      <AnimatePresence>
        {isClicked && (
          <motion.div
            animate={{ width: 200 }}
            exit={{ width: 0 }}
            transition={{ duration: 0.35 }}
            css={css`
              position: absolute;
              display: flex;
              flex-direction: column;
              align-items: flex-end;

              background-color: ${theme.colors.grey[50]};
              color: ${theme.colors.primary[300]};
              padding: 0.5rem;
              right: 1%;
              top: 7%;
              z-index: 9999;
            `}
          >
            <p>Home</p>
            <p>Solutions</p>
            <p>About</p>
            <p></p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
