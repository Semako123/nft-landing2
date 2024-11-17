import React from "react";
import { InfoCard } from "../InfoCard";
import { useState } from "react";
import NftImage from "../NftImage";
import nftBlue from "../../assets/nftBlue.avif";
import nftRed from "../../assets/nftRed.png";
import nftPurple from "../../assets/nftPurple.png";

const Info = () => {
  const [currNft, setCurrNft] = useState(nftBlue);
  return (
    <div className="p-8 lg:p-20 xl:p-32 bg-[#101111] text-white flex flex-wrap lg:flex-nowrap justify-between gap-x-10 items-center rounded-b-[40px] lg:rounded-b-[70px]">
      <div className="flex-grow-[1] flex flex-col gap-y-6">
        <InfoCard
          color="oceanBlue"
          onMouseOver={() => {
            setCurrNft(nftBlue);
          }}
        >
          Punks with a blue background are not for sale and have no current
          bids.
        </InfoCard>
        <InfoCard
          color="brickRed"
          onMouseOver={() => {
            setCurrNft(nftRed);
          }}
        >
          Punks with a red background are available for sale by their owner.
        </InfoCard>
        <InfoCard
          color="royalPurple"
          onMouseOver={() => {
            setCurrNft(nftPurple);
          }}
        >
          Punks with a purple background have an active bid on them
        </InfoCard>
      </div>
      <div className="flex-grow-[2] mt-10 lg:mt-0 ">
        <NftImage variant="lg" url={currNft} />
      </div>
    </div>
  );
};

export default Info;
