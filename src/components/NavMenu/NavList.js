import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AiOutlineDown } from "react-icons/ai";
import { Link, navigate } from "gatsby";
import { motion } from "framer-motion";

export const NavList = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex flex-col text-gray-600 hover:text-gray-800 gap-2">
        <NavigationMenu.Item>
          <Link className=" xl:text-lg" to="/">
            Home
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex items-center bg-inherit gap-1 xl:text-lg">
            Services
            <AiOutlineDown className="text-gray-600" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul>
              <li>
                <h6>Website Design, Building And Hosting</h6>
                <p>
                  creates and hosts professional websites tailored to the
                  client's needs and goals.
                </p>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
