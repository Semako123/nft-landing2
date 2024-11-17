import React from "react";
import Slider from "../Slider";

const RecentTransactions = () => {
  return (
    <div className="p-4 lg:p-20 xl:p-24 pb-10 text-[#101111] bg-white">
      <h3 className="text-4xl lg:text-5xl font-semibold my-10">
        Recent Transactions
      </h3>
      <Slider
        url="https://api.opensea.io/api/v2/collection/cryptopunks/nfts?limit=60"
        start={20}
        end={60}
      />
    </div>
  );
};

export default RecentTransactions;
