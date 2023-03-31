import React from "react";
import { NewPeakComputingLogo } from "../NewPeakComputingLogo";

const DesktopNavMenu = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-gray-800 bg-gray-100 pr-2 dark:border-slate-400 dark:bg-cyan-900">
      <NewPeakComputingLogo width={75} />
    </div>
  );
};

export default DesktopNavMenu;
