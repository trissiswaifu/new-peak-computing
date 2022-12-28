import { css, useTheme } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useState } from "react";
import { NavMenuSampleDropdown } from "./NavMenuSampleDropdown";
import { NavMenuServicesDropdown } from "./NavMenuServicesDropdown";

const bars = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0.5rem; */
  gap: 0.5rem;
`;

export const MobileNavMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = useState();
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
          //mountain close button
          // animate={
          //   isClicked ? { rotate: -60, y: 6, x: -7 } : { x: 0, opacity: 1 }
          // }
          css={css`
            height: 1px;
            width: 30px;
            background-color: ${theme.colors.grey[50]};
          `}
        />
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          css={css`
            height: 1px;
            width: 30px;
            background-color: ${theme.colors.grey[50]};
          `}
          animate={isClicked ? { x: 0, opacity: 0 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.15 }}
          //mountain close button
          // animate={
          //   isClicked ? { rotate: 60, y: -4, x: 8 } : { x: 0, opacity: 1 }
          // }
        />
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          animate={isClicked ? { rotate: -45, y: -9 } : { x: 0, opacity: 1 }}
          //mountain close button
          // animate={isClicked ? { y: 0 } : { x: 0, opacity: 1 }}
          css={css`
            height: 1px;
            width: 30px;
            background-color: ${theme.colors.grey[50]};
          `}
        />
      </div>
      <AnimatePresence>
        {isClicked && (
          <motion.div
            animate={{ width: 300 }}
            exit={{ width: 0 }}
            transition={{ duration: 0.35 }}
            css={css`
              position: absolute;
              display: flex;
              flex-direction: column;
              background-color: ${theme.colors.grey[300]};
              color: ${theme.colors.primary[900]};
              padding: 0.5rem;
              right: 0%;
              top: 100%;
              gap: 0.75rem;
              z-index: 9999;
            `}
          >
            <Link to="/">Home</Link>
            <NavMenuServicesDropdown />
            <NavMenuSampleDropdown />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
