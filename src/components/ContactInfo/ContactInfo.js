import React from "react";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

export const ContactInfo = ({ phoneNumber, address }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 ">
        <div className="bg-red-200 dark:bg-red-800 p-4 rounded-sm">
          <GoLocation
            fontSize={30}
            className="text-gray-800 dark:text-gray-50"
          />
        </div>
        <p className="p-4 w-full bg-gray-100 dark:bg-gray-700 text-lg text-gray-700 dark:text-gray-50 rounded-sm">
          {address}
        </p>
      </div>
      <div className="flex items-center gap-4 ">
        <div className="bg-red-200 dark:bg-red-800 p-4 rounded-sm">
          <BsPhone fontSize={30} className="text-gray-800 dark:text-gray-50" />
        </div>
        <p className="p-4 w-full bg-gray-100 dark:bg-gray-700 text-lg text-gray-700 dark:text-gray-50 rounded-sm">
          {phoneNumber}
        </p>
      </div>
    </div>
  );
};
