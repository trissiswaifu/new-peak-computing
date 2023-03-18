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
      setIsSamplesListVisible(!isSamplesListVisible);
      setIsServericesListVisible(!isServicesListVisible);
    }
    if (dropdown === "samples") {
      setIsServericesListVisible(!isServicesListVisible);
      setIsSamplesListVisible(!isSamplesListVisible);
    }
  };
  return (
    <NavigationMenu.Root className="">
      <NavigationMenu.List
        className={`flex flex-col gap-4 text-gray-600 dark:text-gray-100 md:gap-8 lg:flex-row lg:text-gray-50`}
      >
        <NavigationMenu.Item>
          <Link
            className="text-xl xl:text-lg text-gray-800 hover:text-cyan-700 dark:text-gray-200  dark:hover:text-cyan-300 "
            to="/"
          >
            Home
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link
            className=" overflow-hidden whitespace-nowrap text-xl xl:text-lg text-gray-800 hover:text-cyan-700 dark:text-gray-200 dark:hover:text-cyan-300 "
            to="/contact"
          >
            Contact Us
          </Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            // onClick={() => {
            //   handleVisibility("services");
            // }}
            className={`flex  items-center gap-1 bg-inherit text-xl text-gray-800 hover:text-cyan-700 dark:text-gray-200 dark:hover:text-cyan-300 xl:text-lg`}
          >
            Services
            <motion.div
              animate={isServicesListVisible ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HiChevronDown
                className="text-gray-600 hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-300"
                aria-hidden
              />
            </motion.div>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <AnimatePresence>
              {/* {isServicesListVisible && ( */}
              <motion.ul
                key="serviceList"
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 1000, opacity: 0 }}
                exit={{ x: -500 }}
                transition={{ duration: 0.35 }}
                className="rounded:sm right-0 top-full z-50 mt-4 flex flex-col gap-6 p-1"
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
              {/* )} */}
            </AnimatePresence>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            onClick={() => {
              handleVisibility("samples");
            }}
            className={`flex  items-center gap-1 bg-inherit text-xl text-gray-800 hover:text-cyan-700 dark:text-gray-200 xl:text-lg`}
          >
            Samples
            <motion.div
              animate={isSamplesListVisible ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HiChevronDown
                className="text-gray-600 hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-300"
                aria-hidden
              />
            </motion.div>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <AnimatePresence>
              {/* {isSamplesListVisible && ( */}
              <motion.ul
                key="serviceList"
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 1000, opacity: 0 }}
                exit={{ x: -500 }}
                transition={{ duration: 0.35 }}
                className=" right-0 top-full z-50 mt-4 mr-4 flex max-w-lg flex-col gap-5 p-2"
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
              {/* )} */}
            </AnimatePresence>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
