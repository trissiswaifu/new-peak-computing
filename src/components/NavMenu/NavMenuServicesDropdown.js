import React from "react";
import { Link, navigate } from "gatsby";
//TODO switch to heroicons
import { BsChevronLeft } from "react-icons/bs";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const NavMenuServicesDropdown = () => {
  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <NavigationMenu.Root className="text-base xl:text-lg">
      <NavigationMenu.Trigger className="active:text-cyan-500 flex items-center gap-1">
        Services
        <BsChevronLeft aria-hidden />
      </NavigationMenu.Trigger>
      <NavigationMenu.Portal>
        <NavigationMenu.Content className="container max-w-xs grid grid-cols-1 gap-2 bg-gray-50 rounded:sm p-2">
          <NavigationMenu.Item
            onSelect={() => {
              handleNavigate("/services/website-design");
            }}
          >
            <div>
              <h6>Website Design, Building And Hosting</h6>
              <p>
                create and host professional websites tailored to the client's
                needs and goals.
              </p>
            </div>
          </NavigationMenu.Item>
          <NavigationMenu.Item
            onSelect={() => {
              handleNavigate("/services/email-hosting");
            }}
          >
            Email Hosting & Management
          </NavigationMenu.Item>
          <NavigationMenu.Item
            onSelect={() => {
              handleNavigate("/services/it-services");
            }}
          >
            IT Services
          </NavigationMenu.Item>
          <NavigationMenu.Item
            onSelect={() => {
              handleNavigate("/services/small-businessapps");
            }}
          >
            Small Business Applications
          </NavigationMenu.Item>
          <NavigationMenu.Item
            onSelect={() => {
              handleNavigate("/services/business2business");
            }}
          >
            Business to Business Software
          </NavigationMenu.Item>
          <NavigationMenu.Item
            onSelect={() => {
              handleNavigate("/services/automation-service");
            }}
          >
            Automation Services
          </NavigationMenu.Item>
        </NavigationMenu.Content>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
};
