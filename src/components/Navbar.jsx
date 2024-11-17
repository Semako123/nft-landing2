import React, { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import x from "../assets/icons/x.svg";
import discord from "../assets/icons/discord.svg";
import { RxTextAlignJustify } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#101111] text-white p-4">
      <div className="container mx-auto flex items-center">
        <Logo />
        <div className="lg:flex items-center ml-auto gap-x-6 hidden">
          <ul className="flex items-center opacity-50 gap-x-12">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Collections</li>
            <li className="cursor-pointer">FAQs</li>
          </ul>
          <Button variant="accent">Connect Wallet</Button>
          <img src={x} alt="x" />
          <img src={discord} alt="discord" />
        </div>
        <div className="hidden max-lg:block ml-auto">
          <RxTextAlignJustify
            className="text-4xl"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
            }}
          />
        </div>
      </div>
      <MobileNavbar isOpen={isOpen} />
    </header>
  );
};

const MobileNavbar = ({ isOpen }) => {
  return (
    <div
      className={`max-lg:flex flex-col gap-y-10 hidden w-full bg-[#1a1a1a] fixed z-50 ${
        isOpen ? "translate-x-12" : "translate-x-[1000px]"
      } p-12 h-full transition-transform duration-1000`}
    >
      <ul className="flex flex-col items-start gap-y-12">
        <li className="text-3xl cursor-pointer font-semibold">About</li>
        <li className="text-3xl cursor-pointer font-semibold">Collections</li>
        <li className="text-3xl cursor-pointer font-semibold">FAQs</li>
      </ul>
      <Button variant="outline">Connect Wallet</Button>
      <div className="flex gap-x-4 items-center">
        <img src={x} alt="x" className="w-10" />
        <p className="text-xl cursor-pointer font-semibold">Twitter</p>
      </div>
      <div className="flex gap-x-4 items-center">
        <img src={discord} alt="discord" className="w-10" />
        <p className="text-xl cursor-pointer font-semibold">Join us</p>
      </div>
    </div>
  );
};

export default Navbar;
