import React from "react";
import title from "../assets/blogTitle.svg";
import { MdArrowOutward } from "react-icons/md";

const FeautureCard = ({ children }) => {
  return (
    <div className="border border-[#565656] rounded-xl ">
      <div className="w-[320px] h-[218px] xl:w-[433px] xl:h-[237px] px-[37px] py-[40px]">
        <img src={title} alt="Mashable" className="pb-5" />
        <p className="text-xl xl:text-2xl -tracking-tight">{children}</p>
      </div>
      <div className="px-[37px] py-5 border-[#565656] border-t flex justify-between hover:cursor-pointer">
        <p className="text-xl font-medium">Read Article</p>
        <MdArrowOutward className="text-xl" />
      </div>
    </div>
  );
};

export default FeautureCard;
