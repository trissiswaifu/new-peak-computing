import React from "react";
import { Link } from "gatsby";

export const ListItem = ({ to, title, body, icon }) => {
  return (
    <li className="max-w-md rounded-sm border-red-500 bg-gray-50 transition-all duration-100 ease-in hover:border-l-4 focus:border-l-4 active:border-l-4">
      <div className=" relative top-4 left-4 max-w-fit rounded-sm bg-gray-200 p-2 text-xl text-cyan-500">
        {icon}
      </div>
      <Link className="p-6 text-gray-800" to={to}>
        <p className="mx-2 text-xl">{title}</p>
        <p className="mx-2 mt-2 text-sm text-gray-600">{body}</p>
      </Link>
    </li>
  );
};
