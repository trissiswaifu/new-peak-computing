import React from "react";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

export const ContactInfo = ({ phoneNumber, address }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 ">
        <div className="rounded-sm bg-red-200 p-4 dark:bg-red-800">
          <GoLocation
            fontSize={30}
            className="text-gray-800 dark:text-gray-50"
          />
        </div>
        <p className="w-full rounded-sm bg-gray-100 p-4 text-lg text-gray-700 dark:bg-gray-700 dark:text-gray-50">
          {address}
        </p>
      </div>
      <div className="flex items-center gap-4 ">
        <div className="rounded-sm bg-red-200 p-4 dark:bg-red-800">
          <BsPhone fontSize={30} className="text-gray-800 dark:text-gray-50" />
        </div>
        <p className="w-full rounded-sm bg-gray-100 p-4 text-lg text-gray-700 dark:bg-gray-700 dark:text-gray-50">
          {phoneNumber}
        </p>
      </div>
    </div>
  );
};
