import React from "react";
import { BsArrowRight } from "react-icons/bs";

//TODO link to each service's page

export const HomePageServiceListItem = ({ service }) => {
  return (
    <li className="flex flex-row items-center gap-2">
      <span className="rounded:sm bg-cyan-800 p-2  text-gray-50">
        <BsArrowRight />
      </span>
      <span className="text-lg ">{service}</span>
    </li>
  );
};
