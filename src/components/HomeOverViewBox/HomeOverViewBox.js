import { navigate } from "gatsby";
import React from "react";
import { BackgroundSvg } from "./BackgroundSvg";

export const HomeOverViewBox = ({ title, children, textButton, icon, url }) => {
  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <div>
      <div className="pl-2 pr-2 flex flex-col gap-4 max-w-lg">
        <div className="flex gap-4 items-baseline mb-1 mt-2">
          {/* <div className="bg-red-600 rounded:sm pt-1 pr-3 pb-1 pl-3">
            {icon}
          </div> */}
          {/* {title && (
            <h6 className="text-lg text-gray-600 font-bold">{title}</h6>
          )} */}
        </div>

        <p className="p-3 text-gray-800 text-left text-base">{children}</p>
        <button
          onClick={() => {
            handleClick(url);
          }}
          className=" mr-4 self-end align bg-cyan-600 text-gray-200 active:text-gray-50 p-4 w-40 lg:hover:text-gray-50 font-semibold active:shadow-md hover:shadow-md"
        >
          {textButton}
        </button>
      </div>
      {/* <BackgroundSvg /> */}
    </div>
  );
};
