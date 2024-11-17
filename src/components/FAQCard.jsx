import React from "react";

const FAQCard = ({ question, response }) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap border-[#565656] border-t-[1px] pt-6">
      <div className="lg:w-1/2 text-xl font-medium mb-4">{question}</div>
      <div className="lg:w-1/2 text-lg text-[#a0a0a0]">{response}</div>
    </div>
  );
};

export default FAQCard;
