import React from "react";

export const LabelInput = ({
  labelText,
  type,
  name,
  value,
  onChange,
  autoComplete,
}) => {
  return (
    <>
      <label className="flex flex-col">
        <span className="text-gray-800 dark:text-gray-100 text-lg mb-1">
          {labelText}
        </span>
        <input
          className="p-2 bg-slate-200 outline-cyan-500 rounded-sm text-gray-600 shadow-inner focus:shadow-none focus:bg-gray-100 focus:outline-1 focus:text-gray-800 dark: text-base lg:text-lg "
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
        />
      </label>
    </>
  );
};
