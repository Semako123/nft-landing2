import React from "react";
import Button from "../Button";
import HeroSlider from "../HeroSlider";

const Hero = () => {
  return (
    <section className="bg-[#101111] text-white">
      <div className="p-8 lg:p-20 xl:p-32 flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight text-balance text-center mb-20">
          The project that inspired the modern CryptoArt movement
        </h1>
        <p className="text-base lg:text-lg xl:w-1/2 text-center mb-10">
          10,000 unique collectible characters with proof of ownership stored on
          the Ethereum blockchain.
        </p>
        <Button>
          Mint <span className="font-semibold">now</span>
        </Button>
      </div>
      <HeroSlider />
    </section>
  );
};

export default Hero;
