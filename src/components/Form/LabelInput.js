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
      <label>
        <span>{labelText}</span>
        <input
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
