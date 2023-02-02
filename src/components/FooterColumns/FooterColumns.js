import React from "react";
import { Link } from "gatsby";

export const FooterColumns = ({ header, links }) => {
  return (
    <div className="col-span-6 mb-12 flex max-w-fit flex-col p-4 lg:col-span-4">
      <h5 className="text-xl text-gray-800 dark:text-gray-50">{header}</h5>
      {links.map((link) => (
        <Link
          className="mt-2 text-base text-gray-600 duration-100 ease-in hover:text-gray-100 dark:text-gray-200 dark:hover:text-gray-500 lg:decoration-0"
          key={link.url}
          to={`/${link.url}`}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};
