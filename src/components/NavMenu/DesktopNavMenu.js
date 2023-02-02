import { Link, navigate } from "gatsby";
import React, { useState } from "react";
import { NavMenuServicesDropdown } from "./NavMenuServicesDropdown";
import { NavMenuSampleDropdown } from "./NavMenuSampleDropdown";

export const DesktopNavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-4 pr-6 font-bold text-gray-50">
      <Link className="text-base text-gray-50 decoration-0 xl:text-lg" to="/">
        Home
      </Link>
      <NavMenuServicesDropdown />
      <NavMenuSampleDropdown />
      <Link to="/contact">Contact Us</Link>
      {/* <Link to="about">About</Link> */}
    </div>
  );
};
