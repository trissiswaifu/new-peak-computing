import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <button className="rounded-sm bg-cyan-600 p-2 font-semibold text-gray-200 shadow-sm hover:bg-cyan-700 hover:text-gray-50  hover:shadow-none">
      {text}
    </button>
  );
};

export default PrimaryButton;
