import { Menu } from "@headlessui/react";
import { Link } from "gatsby";
import React from "react";
import { NewPeakComputingLogo } from "../NewPeakComputingLogo";

const TabletNavMenu = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b-2 border-gray-700 bg-gray-100 p-2 pr-2 dark:border-slate-400 dark:bg-cyan-900">
      <NewPeakComputingLogo className="pl-0" width={75} />
      <Link
        className="text-xl text-gray-800 hover:text-cyan-700 dark:text-gray-200 dark:hover:text-cyan-300  xl:text-lg"
        to="/"
      >
        Home
      </Link>
      <Menu></Menu>
    </div>
  );
};

export default TabletNavMenu;
