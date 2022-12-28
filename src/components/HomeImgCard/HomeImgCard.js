import React from "react";
import { css, useTheme } from "@emotion/react";
import { PrimaryButton } from "../PrimaryButton";
import { motion } from "framer-motion";

const cardStyles = css`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 2px;
  /* margin-bottom: 20px; */
  max-width: 275px;
  min-width: 275px;
  min-height: 300px;
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export const HomeImgCard = ({ title, children, img, alt, textButton }) => {
  const theme = useTheme();
  return (
    <div css={cardStyles}>
      {/* <Overlay> */}
      {/* <img
        alt={alt}
        src={img}
        css={css`
          max-width: 100%;
          z-index: 0;
          background: ${theme.color?.grey[900]};
        `}
      /> */}
      <div
        css={css`
          padding-left: 3%;
          padding-right: 3%;
          display: flex;
          gap: 1rem;
          flex-direction: column;
          /* padding: 1%; */
        `}
      >
        {title && (
          <h6
            css={css`
              /* background-image: url(${img}); */
              font-size: 18px;
              margin-bottom: 1%;
              margin-top: 2%;
              /* height: 100%; */
              color: ${theme.colors.grey[900]};
              font-weight: bold;
            `}
          >
            {title}
          </h6>
        )}
        <p
          css={css`
            color: ${theme.colors.grey[900]};
          `}
        >
          {children}
        </p>
        {/* <PrimaryButton text={textButton} fontWeight={fontWeightButton} /> */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          css={css`
            background-color: ${theme.colors.primary[700]};
            color: ${theme.colors.grey[50]};
            padding: 1rem;
            border-radius: 0.25rem;
            position: absolute;
            bottom: 2%;
            left: 2.5%;
            right: 0%;
            width: 95%;
            font-weight: 600;
            &:hover {
              box-shadow: 0rem 0.075rem 0.25rem 0rem ${theme.colors.grey[600]};
            }
          `}
        >
          {textButton}
        </motion.button>
      </div>

      {/* </Overlay> */}
    </div>
  );
};
