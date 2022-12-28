import React from "react";
import { css } from "@emotion/react";

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-items: center;
`;

export const Grid = ({ children }) => {
  return <div css={gridStyles}>{children}</div>;
};
