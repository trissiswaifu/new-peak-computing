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
        <span className="mb-1 text-lg text-gray-800 dark:text-gray-100">
          {labelText}
        </span>
        <input
          className="dark: rounded-sm bg-slate-200 p-2 text-base text-gray-600 shadow-inner outline-cyan-500 focus:bg-gray-100 focus:text-gray-800 focus:shadow-none focus:outline-1 lg:text-lg "
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
