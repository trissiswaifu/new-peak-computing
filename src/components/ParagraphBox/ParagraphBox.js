import React from "react";

export const ParagraphBox = ({ header, text }) => {
  return (
    <div>
      <h6>{header}</h6>
      <p>{text}</p>
    </div>
  );
};
