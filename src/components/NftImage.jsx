import classNames from "classnames";
import React from "react";

const NftImage = ({ url, variant }) => {
  const isLarge = variant === "lg";
  const isMed = variant === "md";
  const Imageclx = classNames(
    "rounded-[40px] select-none",
    { "w-[320px] lg:w-[400px] xl:w-[600px]": isLarge },
    { "w-[150px]": !variant },
    { "w-[300px]": isMed }
  );
  return (
    <div>
      <img src={url} alt="" className={Imageclx} referrerPolicy="no-referrer" />
    </div>
  );
};

export default NftImage;
