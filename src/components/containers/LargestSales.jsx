import React from "react";
import Slider from "../Slider";

const LargestSales = () => {
  return (
    <div className="p-4 lg:p-20 lg:-mb-20 xl:p-32 text-[#101111] bg-white">
      <h3 className="text-4xl lg:text-5xl font-semibold my-10">Largest Sales</h3>
      <Slider
        url="https://api.opensea.io/api/v2/collection/cryptopunks/nfts?limit=80"
        start={40}
        end={80}
      />
    </div>
  );
};

export default LargestSales;
