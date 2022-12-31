import React from "react";

export const ServiceExplantion = ({ header, para1, para2 }) => {
  return (
    <div className="flex-col">
      <h4>{header}</h4>
      <p>{para1}</p>
      <p>{para2}</p>
    </div>
  );
};
