import React from "react";
import Button from "../Button";

const CTA = () => {
  return (
    <div className="p-8 lg:p-20 xl:p-32 bg-[#101111] text-white">
      <div className="flex flex-wrap justify-between">
        <h3 className="lg:w-1/3 xl:w-1/2 text-3xl font-medium mb-12 lg:font-normal lg:text-5xl xl:text-6xl">
          Meet the Punks
        </h3>
        <div className="lg:w-2/3 xl:w-1/2">
          <p className="text-balance tracking-wide text-base lg:text-lg xl:text-2xl font-light">
            The CryptoPunks are 24x24 pixel art images, generated
            algorithmically. Most are punky-looking guys and girls, but there
            are a few rarer types mixed in: Apes, Zombies and even the odd
            Alien. Every punk has their own profile page that shows their
            attributes as well as their ownership/for-sale status.
          </p>
          <div className="flex flex-wrap mt-10 gap-x-6 gap-y-6">
            <Button>
              <span className="font-medium">Buy a Punk</span>
            </Button>
            <Button variant="outline">View full collection</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
