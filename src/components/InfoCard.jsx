import React from "react";
import classNames from "classnames";

export const InfoCard = ({ children, color, onMouseOver }) => {
  const colorClassMap = {
    oceanBlue: "hover:bg-oceanBlue",
    brickRed: "hover:bg-brickRed",
    royalPurple: "hover:bg-royalPurple",
  };

  const infoClass = classNames(
    "cursor-pointer p-7 xl:p-9 text-xl xl:text-2xl transition-colors rounded-xl border-[#565656] border",
    colorClassMap[color] || "hover:bg-gray-200" // Default color if no match
  );

  return <div className={infoClass} onMouseOver={onMouseOver}>{children}</div>;
};
