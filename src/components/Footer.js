import { css } from "@emotion/react";
import React from "react";

const footer = css`
  background-color: #357a92;
  display: flex;
  justify-content: center;
`;

export const Footer = () => {
  return (
    <footer css={footer}>
      <div>
        <h1>Footer</h1>
      </div>
    </footer>
  );
};
