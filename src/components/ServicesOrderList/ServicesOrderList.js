import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
export const ServicesOrderList = ({ serviceListItems }) => {
  return (
    <ul className="list-none pl-0 ">
      {serviceListItems.map((item, index) => (
        <li key={index}>
          <div className="flex items-center gap-2">
            <IoMdCheckmarkCircle className="rounded text-cyan-500 " />
            <p>{item.details}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
