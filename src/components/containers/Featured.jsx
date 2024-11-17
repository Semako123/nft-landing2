import React from "react";
import FeautureCard from "../FeautureCard";

const Featured = () => {
  const articles = [
    "This ethereum-based project could change how we think about digital art",
    "CryptoKitties, CryptoPunks and the birth of a cottage industry",
    "'Obviously, we had no idea it was going to get here', say the guys who made the first NFT",
  ];
  return (
    <section className="bg-[#101111] text-white py-12 lg:p-20 xl:p-32">
      <p className="text-center mb-10 text-lg">Featured in</p>
      <div className="flex justify-evenly flex-wrap gap-x-4 gap-y-10">
        {articles.map((article) => (
          <FeautureCard key={article}>{article}</FeautureCard>
        ))}
      </div>
    </section>
  );
};

export default Featured;
