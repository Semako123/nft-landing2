import classNames from "classnames";
import React from "react";

const Button = ({ children, variant }) => {
  const isAccent = variant === "accent";
  const isOutline = variant === "outline";
  const btnClass = classNames(
    "rounded-full w-fit hover:cursor-pointer",
    { "px-6 py-2 text-[#C4EBFF] bg-[#638596]": isAccent },
    { "text-[#101111] px-9 py-4 bg-white": !variant },
    { "text-white px-9 py-4 border-[#565656] border": isOutline }
  );
  return <div className={btnClass}>{children}</div>;
};

export default Button;
