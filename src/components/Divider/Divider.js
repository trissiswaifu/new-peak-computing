import React from "react";

export const Divider = ({ shade, xInset }) => {
  return (
    <hr className={`h-0.5 border-0 bg-cyan-${shade} w-11/12 mx-${xInset}`} />
  );
};
