import { Link, navigate } from "gatsby";
import React, { useState } from "react";
import { css, useTheme } from "@emotion/react";
import { NavMenuServicesDropdown } from "./NavMenuServicesDropdown";
import { NavMenuSampleDropdown } from "./NavMenuSampleDropdown";

export const DesktopNavMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      css={css`
        display: flex;
        gap: 1rem;
        padding-right: 1.5rem;
        font-weight: 700;
        color: ${theme.colors.grey[50]};
        a {
          text-decoration: none;
          color: ${theme.colors.grey[50]};
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: calc(30 + 2vmin);
          opacity: 150%;
          @media (min-width: 1200px) {
            font-size: 1.125rem;
          }
          &:hover {
            opacity: 0.8;
          }
        }
      `}
    >
      <Link to="/">Home</Link>
      <NavMenuServicesDropdown />
      <NavMenuSampleDropdown />
      <Link to="/contact">Contact Us</Link>
      {/* <Link to="about">About</Link> */}
    </div>
  );
};
