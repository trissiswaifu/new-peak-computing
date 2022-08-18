import { css } from "@emotion/react";
import { motion } from "framer-motion";
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
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  return (
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
        transition={{}}
      />
      <motion.span
        initial={{ x: 0, opacity: 1 }}
        animate={isClicked ? { rotate: -45, y: -9 } : { x: 0, opacity: 1 }}
        css={bar}
      />
    </div>
  );
};
