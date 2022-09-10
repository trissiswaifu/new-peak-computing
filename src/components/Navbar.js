import { css, useTheme } from "@emotion/react";
import { Link } from "gatsby";
import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { DesktopNavbar } from "./DesktopNavbar";
import { NewPeakComputingLogo } from "./NewPeakComputingLogo";
import { MobileNavbar } from "./MobileNavbar";
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <div
        css={css`
          /* position: sticky; */
          /* top: 0; */
          padding: 0rem 1rem;
          /* width: 100%; */
          /* z-index: 2; */
          display: flex;
          justify-content: space-between;
          align-items: center;
          /* background-color: ${theme.colors.grey[200]}; */
          background-color: #fff;
          /* background: transparent; */
          /* border-bottom: 1px solid #a6a6a6; */
          img {
            padding-left: 0rem;
          }
        `}
      >
        <NewPeakComputingLogo width={75} />
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        {/* <DesktopNavbar /> */}
      </div>
    </>
  );
};
