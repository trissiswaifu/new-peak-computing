import React from "react";
import { useTheme, css } from "@emotion/react";
import { IoMdCheckmarkCircle } from "react-icons/io";
export const ServicesOrderList = ({ serviceListItems }) => {
  const theme = useTheme();
  return (
    <ul
      css={css`
        list-style-type: none;
        padding-left: none;
        padding-inline-start: 0px;
        /* margin-block-start: 0px; */
      `}
    >
      {serviceListItems.map((item) => (
        <li>
          <div
            css={css`
              display: flex;
              gap: 0.5rem;
              align-items: center;
            `}
          >
            <IoMdCheckmarkCircle
              fontSize={40}
              css={css`
                /* background-color: ${theme.colors.grey[700]}; */
                border-radius: 0.25rem;
                /* padding: 0.25rem; */
                color: ${theme.colors.primary[500]};
              `}
            />
            <p>{item.details}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
