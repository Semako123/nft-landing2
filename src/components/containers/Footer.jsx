import React from "react";
import logo from "../../assets/logo2.svg";
import x from "../../assets/icons/x.svg";
import discord from "../../assets/icons/discord.svg";

const Footer = () => {
  return (
    <footer className="bg-[#101111] text-white p-8 lg:p-20 xl:p-32">
      <div className="flex justify-center flex-wrap mb-8 gap-x-10 lg:mb-20 gap-y-4 lg:gap-0">
        <img src={logo} alt="CryptoPunks" />
        <div className="flex flex-wrap lg:ml-auto gap-x-8 text-[#A0A0A0]">
          <p className="cursor-pointer">Buy a Punk</p>
          <p className="cursor-pointer">View Full Collection</p>
        </div>
        <div className="flex justify-center lg:ml-auto gap-x-8">
          <img src={x} alt="" />
          <img src={discord} alt="" />
        </div>
      </div>
      <hr className="border-[#565656]" />
      <div className="flex justify-center gap-4 lg:gap-8 pt-6 lg:pt-16 text-[#565656] flex-wrap items-center text-center">
        <p className="cursor-pointer">Privacy Policy</p>
        <p className="cursor-pointer">Terms of Service</p>
        <p className="cursor-pointer">Cookies Settings</p>
        <p className="cursor-pointer">
          © 2021 CryptoPunks. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
