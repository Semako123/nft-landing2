import React from "react";
import NftImage from "./NftImage";

const NftCard = ({ nft }) => {
  const date = new Date(nft.updated_at);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
  return (
    <div>
      <NftImage
        variant="md"
        url={nft.display_image_url}
        referrerPolicy="no-referrer"
      />
      <div className="mt-4">
        <p className="text-2xl font-medium">#{nft.identifier}</p>
        <p className="text-lg text-[#565656] italic mb-2">{nft.name}</p>
        <p className="text-sm font-light">{formattedDate}</p>
      </div>
    </div>
  );
};

export default NftCard;
