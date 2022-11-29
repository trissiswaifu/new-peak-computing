import { css, useTheme } from "@emotion/react";
import { Link, navigate } from "gatsby";
import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { NewPeakComputingLogo } from "../NewPeakComputingLogo";
import { DesktopNavMenu } from "./DesktopNavMenu";
import { MobileNavMenu } from "./MobileNavMenu";

export const NavMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <div
        css={css`
          position: sticky;
          top: 0;
          padding: 0rem 1rem;
          /* width: 100%; */
          /* z-index: 2; */
          display: flex;
          justify-content: space-between;
          align-items: center;
          /* background-color: ${theme.colors.grey[200]}; */
          background-color: ${theme.colors.primary[900]};
          /* background: transparent; */
          border-bottom: 1px solid ${theme.colors.grey[50]};
          img {
            padding-left: 0rem;
          }
        `}
      >
        <div
          css={css`
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={() => {
            navigate("/");
          }}
        >
          <NewPeakComputingLogo width={75} />
        </div>
        {isMobile ? <MobileNavMenu /> : <DesktopNavMenu />}
      </div>
    </>
  );
};
