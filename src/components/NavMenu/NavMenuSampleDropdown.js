import React from "react";
import { Link, navigate } from "gatsby";
import { BsChevronLeft } from "react-icons/bs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
//TODO center menu links
export const NavMenuSampleDropdown = () => {
  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex items-center bg-inherit gap-1 xl:text-lg">
          <span>Samples</span>
          <BsChevronLeft className="text-gray-50" />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="container max-w-xs mt-2 grid grid-cols-1 gap-2 bg-gray-50 rounded p-2 text-red-900">
        <DropdownMenu.Item
          onSelect={() => {
            handleNavigate("/services/website-design");
          }}
        >
          <div>
            <h6>Website Design, Building And Hosting</h6>
            <p>
              creates and hosts professional websites tailored to the client's
              needs and goals.
            </p>
          </div>
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
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
