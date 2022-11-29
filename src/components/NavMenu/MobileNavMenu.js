import { css, useTheme } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, navigate } from "gatsby";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BsChevronLeft } from "react-icons/bs";

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

  const handleNavigate = (url) => {
    navigate(url);
  };

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
          // animate={isClicked ? { rotate: 45, y: 9 } : { x: 0, opacity: 1 }}
          //mountain close button
          animate={
            isClicked ? { rotate: -60, y: 6, x: -7 } : { x: 0, opacity: 1 }
          }
          css={css`
            height: 1px;
            width: 30px;
            background-color: ${theme.colors.grey[900]};
          `}
        />
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          css={css`
            height: 1px;
            width: 30px;
            background-color: ${theme.colors.grey[900]};
          `}
          // animate={isClicked ? { x: 20, opacity: 0 } : { x: 0, opacity: 1 }}
          //mountain close button
          animate={
            isClicked ? { rotate: 60, y: -4, x: 8 } : { x: 0, opacity: 1 }
          }
        />
        <motion.span
          initial={{ x: 0, opacity: 1 }}
          // animate={isClicked ? { rotate: -45, y: -9 } : { x: 0, opacity: 1 }}
          //mountain close button
          animate={isClicked ? { y: 0 } : { x: 0, opacity: 1 }}
          css={css`
            height: 1px;
            width: 30px;
            background-color: ${theme.colors.grey[900]};
          `}
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
              /* align-items: flex-end; */

              background-color: ${theme.colors.grey[300]};
              color: ${theme.colors.primary[900]};
              padding: 0.5rem;
              right: 1%;
              top: 7%;
              z-index: 9999;
            `}
          >
            <Link to="/">Home</Link>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <div
                  css={css`
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                  `}
                  onMouseEnter={() => setOpen(true)}
                >
                  <span
                    css={css`
                      color: ${theme.colors.primary[800]};
                    `}
                  >
                    Services
                  </span>
                  <motion.BsChevronLeft color="cyan" animate={{ rotate: 45 }} />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item
                  onSelect={() => {
                    handleNavigate("/services/website-design");
                  }}
                >
                  Website Design, Building And Hosting
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            {/* <p>About</p> */}
            {/* <p></p> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
