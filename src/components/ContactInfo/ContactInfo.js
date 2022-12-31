import React from "react";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

export const ContactInfo = ({ phoneNumber, address }) => {
  return (
    <div className="flex-col gap-4">
      <div className="flex items-center gap-4 ">
        <div className="bg-cyan-600 p-4 rounded-sm">
          <GoLocation fontSize={30} color="white" />
        </div>
        <p className="p-4 w-full bg-cyan-600 text-lg text-gray-50">{address}</p>
      </div>
      <div className="flex items-center gap-4 ">
        <div className="bg-cyan-600 p-4 rounded-sm">
          <BsPhone fontSize={30} color="white" />
        </div>
        <p className="p-4 w-full bg-cyan-600 text-lg text-gray-50">
          {phoneNumber}
        </p>
      </div>
    </div>
  );
};
