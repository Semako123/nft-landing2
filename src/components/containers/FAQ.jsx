import React from "react";
import FAQCard from "../FAQCard";

const FAQ = () => {
  const faqs = [
    {
      "Where are the images for the punks stored?":
        "When originally released, the actual images of the punks were too large to store on the blockchain, so we took a hash of the composite image of all the punks and embeded it into the contract. You can verify that the punks being managed by the Ethereum contract are the True Official Genuine CryptoPunks™ by calculating an SHA256 hash on the cryptopunks image and comparing it to the hash stored in the contract.Since then, due to some clever compression ideas and some help from friends of the punks we have managed to put the entire image and attribute data fully on chain. You can read more about the mechanisms and details of the process in the announcement blog post.",
    },
    {
      "Are the punks an ERC-721 token?":
        "No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract, that means it doesn't comply with any standards. They are almost an ERC20 token. We support the methods that provide your balance so you can watch CryptoPunks as a token in your wallet and see how many you own. None of the other methods are the same since you're not transferring a simple balance, but need to reference which specific Punk you want to work with.",
    },
    {
      "Where does the market data on this site come from?":
        "The prices, bids and sales you see on this site are loaded from the Cryptopunks contract on the Ethereum blockchain. Because the Cryptopunks pre-date the ERC-721 standard (and all third party NFT marketplaces) we also needed to write a market so the punks could be transacted. We have no control over the contract governing this market, and have no access to any additional data beyond what the blockchain provides. In fact anyone else could write a web front end for it.",
    },
    {
      "Do you charge any fees for transactions?":
        "No. We charge no fees for Cryptopunks transacted through the built-in market beyond the ones charged by Ethereum (gas).The contract source and more technical details are available on Github.",
    },
  ];
  return (
    <div className="p-8 lg:p-20 xl:p-32 bg-[#101111] text-white">
      <h2 className="text-3xl lg:text-5xl xl:text-6xl mb-20">
        Details and FAQ
      </h2>
      <div className="flex flex-col gap-y-14">
        {faqs.map((faq) => (
          <FAQCard
            question={Object.keys(faq)}
            response={Object.values(faq)[0]}
            key={Object.keys(faq)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
