import { css, useTheme } from "@emotion/react";
import React from "react";

export const Divider = ({ shade }) => {
  const theme = useTheme();
  return (
    <hr
      css={css`
        height: 1px;
        border-width: 0px;
        background-color: ${theme.colors.primary[shade]};
        width: 90%;
        border-radius: 0.25rem;
      `}
    />
  );
};
