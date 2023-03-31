// import React, { useState } from "react";
// import * as NavigationMenu from "@radix-ui/react-navigation-menu";

// export const NavList = () => {
//   const [isServicesListVisible, setIsServericesListVisible] = useState(false);
//   const [isSamplesListVisible, setIsSamplesListVisible] = useState(false);

//   const handleVisibility = (dropdown) => {
//     if (dropdown === "services") {
//       setIsSamplesListVisible(false);
//       setIsServericesListVisible(!isServicesListVisible);
//     }
//     if (dropdown === "samples") {
//       setIsServericesListVisible(false);
//       setIsSamplesListVisible(!isSamplesListVisible);
//     }
//   };
//   return (
//     <NavigationMenu.Root className="">
//       <NavigationMenu.List
//         className={`flex flex-col gap-4 text-gray-600 dark:text-gray-100 md:gap-8 lg:flex-row lg:text-gray-50`}
//       >
//         <NavigationMenu.Item>
//           <Link
//             className="text-xl xl:text-lg text-gray-800 hover:text-cyan-700 dark:text-gray-200  dark:hover:text-cyan-300 "
//             to="/"
//           >
//             Home
//           </Link>
//         </NavigationMenu.Item>
//         <NavigationMenu.Item>
//           <Link
//             className=" overflow-hidden whitespace-nowrap text-xl xl:text-lg text-gray-800 hover:text-cyan-700 dark:text-gray-200 dark:hover:text-cyan-300 "
//             to="/contact"
//           >
//             Contact Us
//           </Link>
//         </NavigationMenu.Item>

//         <NavigationMenu.Item>
//           <NavigationMenu.Trigger

//             onClick={() => {
//               handleVisibility("services");
//             }}
//             className={`flex  items-center gap-1 bg-inherit text-xl text-gray-800 hover:text-cyan-700 dark:text-gray-200 dark:hover:text-cyan-300 xl:text-lg`}
//           >
//             Services
//             <HiChevronDown
//               className="text-gray-600 hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-300 group-data-[state=open]:-rotate-180"
//               aria-hidden
//             />
//             <motion.div
//             // animate={isServicesListVisible ? { rotate: 180 } : { rotate: 0 }}
//             // transition={{ duration: 0.25 }}
//             >

//             </motion.div>
//           </NavigationMenu.Trigger>
//           <NavigationMenu.Content>
//             <AnimatePresence>
//               {isServicesListVisible && (
//                 <motion.ul
//                   key="serviceList"
//                   animate={{ x: 0, opacity: 1 }}
//                   initial={{ x: 1000, opacity: 0 }}
//                   exit={{ x: -500 }}
//                   transition={{ duration: 0.35 }}
//                   className="rounded:sm right-0 top-full z-50 mt-4 flex flex-col gap-6 p-1"
//                 >
//                   <ListItem
//                     to="/services/website-design"
//                     title="Website Design, Building And Hosting"
//                     body="Professional Website Design, Development and Hosting"
//                   />
//                   <ListItem
//                     to="/services/email-hosting"
//                     title="Email Hosting & Management"
//                     body={`Secure and Reliable Email Hosting and Management`}
//                   />
//                   <ListItem
//                     to="/services/-it-servces"
//                     title="IT Services"
//                     body={`Expert IT Services for Optimal Business Performance`}
//                   />
//                   <ListItem
//                     to="/services/small-business-apps"
//                     title="Small Business Apps"
//                     body={`Tailored Small Business Apps`}
//                   />
//                   <ListItem
//                     to="/services/b2b"
//                     title="Business to Business Software"
//                     body={`Efficiency-Driven B2B Software`}
//                   />
//                   <ListItem
//                     to="/services/automation-serices"
//                     title="Automation Services"
//                     body={`Automation Services for Efficiency and Cost Savings`}
//                   />
//                 </motion.ul>
//               )}
//             </AnimatePresence>
//           </NavigationMenu.Content>
//         </NavigationMenu.Item>
//         <NavigationMenu.Item>
//           <NavigationMenu.Trigger
//             onClick={() => {
//               handleVisibility("samples");
//             }}
//
//           >
//             Samples
//             <motion.div
//               animate={isSamplesListVisible ? { rotate: 180 } : { rotate: 0 }}
//               transition={{ duration: 0.25 }}
//             >
//               <HiChevronDown
//                 className="text-gray-600 hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-300"
//                 aria-hidden
//               />
//             </motion.div>
//           </NavigationMenu.Trigger>
//           <NavigationMenu.Content>
//             <AnimatePresence>
//               {isSamplesListVisible && (
//                 <motion.ul
//                   key="serviceList"
//                   animate={{ x: 0, opacity: 1 }}
//                   initial={{ x: 1000, opacity: 0 }}
//                   exit={{ x: -500 }}
//                   transition={{ duration: 0.35 }}
//                   className=" right-0 top-full z-50 mt-4 mr-4 flex max-w-lg flex-col gap-5 p-2"
//                 >
//                   <ListItem
//                     to="/services/website-design"
//                     title="Website Design, Building And Hosting"
//                     body="Created and hosted professional websites tailored to the
//                         client's needs and goals."
//                   />
//                   <ListItem
//                     to="/services/email-hosting"
//                     title="Email Hosting & Management"
//                     body={`Email hosting and management involves providing and
//                     maintaining email accounts and services for a domain.`}
//                   />
//                 </motion.ul>
//               )}
//             </AnimatePresence>
//           </NavigationMenu.Content>
//         </NavigationMenu.Item>
//       </NavigationMenu.List>
//     </NavigationMenu.Root>
//   );
// };

import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { HiChevronDown, HiOutlineDesktopComputer } from "react-icons/hi";
import { BsEnvelope } from "react-icons/bs";
import { SiHandshake } from "react-icons/si"
import { ListItem } from "./ListItem";

const NavList = () => {
  return (
    <>
      <Link
        className="text-xl text-gray-800 hover:text-cyan-700 dark:text-gray-200 dark:hover:text-cyan-300  xl:text-lg"
        to="/"
      >
        Home
      </Link>

      <Menu>
        <Menu.Button
          className={`flex  items-center gap-1 bg-inherit text-xl text-gray-800 dark:text-gray-200 xl:text-lg xl:hover:text-cyan-700`}
        >
          {({ open }) => (
            <>
              <span>Services</span>
              <motion.div
                animate={open ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.25 }}
              >
                <HiChevronDown
                  className="text-gray-600 hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-300"
                  aria-hidden
                />
              </motion.div>
            </>
          )}
        </Menu.Button>
        <Menu.Items className="absolute left-0 bg-gray-200">
          <motion.ul
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 1000, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-1 flex max-w-lg flex-col divide-y divide-red-300"
          >
            <ListItem
              to="/services/website-design"
              title="Website Design, Building And Hosting"
              body="Professional Website Design, Development and Hosting"
              icon={<HiOutlineDesktopComputer />}
            />
            <ListItem
              to="/services/email-hosting"
              title="Email Hosting & Management"
              body={`Secure and Reliable Email Hosting and Management`}
              icon={<BsEnvelope />}
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
              icon={<SiHandshake />}
            />
            <ListItem
              to="/services/automation-serices"
              title="Automation Services"
              body={`Automation Services for Efficiency and Cost Savings`}
            />
          </motion.ul>
        </Menu.Items>
      </Menu>
      <Menu>
        <Menu.Button
          className={`flex  items-center gap-1 bg-inherit text-xl text-gray-800 hover:text-cyan-700 dark:text-gray-200 xl:text-lg`}
        >
          {({ open }) => (
            <>
              <span>Samples</span>
              <motion.div
                animate={open ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.25 }}
              >
                <HiChevronDown
                  className="text-gray-600 hover:text-cyan-600 dark:text-gray-100 dark:hover:text-cyan-300"
                  aria-hidden
                />
              </motion.div>
            </>
          )}
        </Menu.Button>
        <Menu.Items>
          <motion.ul
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 1000, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-1 flex max-w-lg flex-col divide-y divide-red-300"
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
        </Menu.Items>
      </Menu>
    </>
  );
};

export default NavList;
