import React from "react";
import { Link, navigate } from "gatsby";
import { BsChevronLeft } from "react-icons/bs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const NavMenuServicesDropdown = () => {
  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex items-center bg-inherit gap-1 xl:text-lg">
          <span>Services</span>
          <BsChevronLeft />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="grid grid-cols-2 gap-2 bg-gray-50 rounded p-2">
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/website-design");
          }}
        >
          Website Design, Building And Hosting
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/email-hosting");
          }}
        >
          Email Hosting & Management
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/it-services");
          }}
        >
          IT Services
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/small-businessapps");
          }}
        >
          Small Business Applications
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/business2business");
          }}
        >
          Business to Business Software
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/automation-service");
          }}
        >
          Automation Services
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
