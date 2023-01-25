import React from "react";
import { Link } from "gatsby";

export const FooterColumns = ({ header, links }) => {
  return (
    <div className="flex flex-col col-span-6 max-w-fit p-4 lg:col-span-4 mb-12">
      <h5 className="text-xl text-gray-800 dark:text-gray-400">{header}</h5>
      {links.map((link) => (
        <Link
          className="text-base text-gray-600 dark:text-gray-50 mt-2 lg:decoration-0 lg:hover:text-gray-50 dark:lg:hover:text-gray-500 ease-in-out duration-100"
          key={link.url}
          to={`/${link.url}`}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};
