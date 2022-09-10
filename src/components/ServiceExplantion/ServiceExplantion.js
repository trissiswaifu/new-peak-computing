import React from "react";
import { useTheme, css } from "@emotion/react";

export const ServiceExplantion = ({ header, para1, para2 }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        /* align-items: center; */
      `}
    >
      <h4>{header}</h4>
      <p>{para1}</p>
      <p>{para2}</p>
    </div>
  );
};
