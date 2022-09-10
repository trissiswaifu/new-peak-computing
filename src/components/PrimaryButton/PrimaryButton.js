import { useTheme, css } from "@emotion/react";
import React from "react";

export const PrimaryButton = ({ text }) => {
  const theme = useTheme();
  return (
    <button
      css={css`
        background-color: ${theme.colors.primary[800]};
        color: ${theme.colors.grey[50]};
        padding: 1rem;
        box-shadow: 0.25rem 0rem 0.25rem 0rem ${theme.colors.grey[50]};
        border-radius: 0.25rem;
      `}
    >
      {text}
    </button>
  );
};
