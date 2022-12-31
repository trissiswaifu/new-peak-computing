import { Link, navigate } from "gatsby";
import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { NewPeakComputingLogo } from "../NewPeakComputingLogo";
import { DesktopNavMenu } from "./DesktopNavMenu";
import { MobileNavMenu } from "./MobileNavMenu";

export const NavMenu = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <div className="sticky top-0 pr-2 flex justify-between items-center bg-cyan-900 border-b-2 border-gray-50 z-50">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="hover:cursor-pointer"
        >
          <NewPeakComputingLogo className="pl-0" width={75} />
        </div>
        {isMobile ? <MobileNavMenu /> : <DesktopNavMenu />}
      </div>
    </>
  );
};
