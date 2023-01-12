import React, { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";
import { ListItem } from "./ListItem";

export const NavList = () => {
  const [isServicesListVisible, setIsServericesListVisible] = useState(false);
  const [isSamplesListVisible, setIsSamplesListVisible] = useState(false);

  const handleVisibility = (dropdown) => {
    if (dropdown === "services") {
      setIsSamplesListVisible(false);
      setIsServericesListVisible(!isServicesListVisible);
    }
    if (dropdown === "samples") {
      setIsServericesListVisible(false);
      setIsSamplesListVisible(!isSamplesListVisible);
    }
  };
  return (
    <NavigationMenu.Root className="">
      <NavigationMenu.List
        className={`flex flex-col lg:flex-row text-gray-600  gap-2 p-2 lg:text-gray-50`}
      >
        <NavigationMenu.Item>
          <Link className="text-xl hover:text-gray-800 " to="/">
            Home
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link
            className="text-xl overflow-hidden whitespace-nowrap "
            to="/contact"
          >
            Contact Us
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            onClick={() => {
              handleVisibility("services");
            }}
            className={`text-xl flex items-center bg-inherit gap-1 xl:text-lg`}
          >
            Services
            <motion.div
              animate={isServicesListVisible ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HiChevronDown
                className="text-gray-600 lg:text-gray-50"
                aria-hidden
              />
            </motion.div>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <AnimatePresence>
              {isServicesListVisible && (
                <motion.ul
                  key="serviceList"
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: 1000, opacity: 0 }}
                  exit={{ x: -500 }}
                  transition={{ duration: 0.35 }}
                  className="rounded:sm p-1 right-0 top-full gap-6 z-50 flex flex-col mt-4"
                >
                  <ListItem
                    to="/services/website-design"
                    title="Website Design, Building And Hosting"
                    body="Professional Website Design, Development and Hosting"
                  />
                  <ListItem
                    to="/services/email-hosting"
                    title="Email Hosting & Management"
                    body={`Secure and Reliable Email Hosting and Management`}
                  />
                  <ListItem
                    to="/services/-it-servces"
                    title="IT Services"
                    body={`Expert IT Services for Optimal Business Performance`}
                  />
                  <ListItem
                    to="/services/small-business-apps"
                    title="Small Business Apps"
                    body={`Tailored Small Business Apps`}
                  />
                  <ListItem
                    to="/services/b2b"
                    title="Business to Business Software"
                    body={`Efficiency-Driven B2B Software`}
                  />
                  <ListItem
                    to="/services/automation-serices"
                    title="Automation Services"
                    body={`Automation Services for Efficiency and Cost Savings`}
                  />
                </motion.ul>
              )}
            </AnimatePresence>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            onClick={() => {
              handleVisibility("samples");
            }}
            className={`text-xl flex items-center bg-inherit gap-1 xl:text-lg`}
          >
            Samples
            <motion.div
              animate={isSamplesListVisible ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HiChevronDown
                className="text-gray-600 lg:text-gray-50"
                aria-hidden
              />
            </motion.div>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <AnimatePresence>
              {isSamplesListVisible && (
                <motion.ul
                  key="serviceList"
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: 1000, opacity: 0 }}
                  exit={{ x: -500 }}
                  transition={{ duration: 0.35 }}
                  className=" p-2 right-0 top-full gap-5 z-50 flex flex-col mt-4 max-w-lg mr-4"
                >
                  <ListItem
                    to="/services/website-design"
                    title="Website Design, Building And Hosting"
                    body="Created and hosted professional websites tailored to the
                        client's needs and goals."
                  />
                  <ListItem
                    to="/services/email-hosting"
                    title="Email Hosting & Management"
                    body={`Email hosting and management involves providing and
                    maintaining email accounts and services for a domain.`}
                  />
                </motion.ul>
              )}
            </AnimatePresence>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
