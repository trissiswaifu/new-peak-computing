import React from "react";
import { Link } from "gatsby";

export const ListItem = ({ to, title, body }) => {
  return (
    // <li>
    //   <Link to={to}>
    //     <div className="text-xl underline decoration-1">{title}</div>
    //     <p className="text-gray-600">{body}</p>
    //   </Link>
    // </li>
    <li className="bg-gray-50 rounded-sm shadow border-l-4 border-red-500 max-w-md">
      <Link className="block p-6 text-gray-800" to={to}>
        <div className="text-xl font-medium">{title}</div>
        <p className="text-gray-600">{body}</p>
      </Link>
    </li>
  );
};
