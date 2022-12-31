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
        <span>{labelText}</span>
        <input
          className="text-gray-800 text-lg p-2 border-cyan=300 rounded:sm bg-gray-100 focus:shadow-cyan-300 focus:outline-none focus:border-cyan-300"
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
