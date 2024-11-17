import React from "react";
import Button from "../Button";
import metamask from "../../assets/icons/metamask.svg";
import ethereum from "../../assets/icons/ethereum.svg";

const GetStarted = () => {
  return (
    <div className="bg-[#101111] text-white p-10 lg:p-20 xl:p-32 rounded-t-[40px] lg:rounded-t-[70px]]">
      <div className="flex flex-wrap ">
        <h3 className="font-medium mb-10 lg_mb-0 lg:w-1/3 xl:w-1/2 text-3xl lg:text-5xl lg:font-normal xl:text-6xl pt-10">
          How do I get a Punk
        </h3>
        <div className="lg:w-2/3 xl:w-1/2 flex flex-col gap-y-6">
          <NumberOne />
          <NumberTwo />
          <NumberThree />
        </div>
      </div>
    </div>
  );
};

const NumberOne = () => {
  return (
    <div className="flex gap-x-6">
      <div className="flex flex-col items-center ">
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-white border mb-6">
          1
        </div>
        <div className="w-[1px] bg-[#565656] flex-grow opacity-50"></div>
      </div>
      <div className="pb-20">
        <img src={metamask} alt="metamask" className="mt-4 mb-6" />
        <h4 className="font-medium text-2xl mb-8">
          Download and Install MetaMask
        </h4>
        <p className="text-lg text-balance lg:w-[80%] mb-12 text-[#A0A0A0]">
          Download and install a Chrome browser plugin called MetaMask. This
          will allow websites (that you authorise) access to your Ethereum
          account.
        </p>
        <Button variant="outline">Download Metamask</Button>
      </div>
    </div>
  );
};

const NumberTwo = () => {
  return (
    <div className="flex gap-x-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-white border mb-6">
          2
        </div>
        <div className="w-[1px] bg-[#565656] flex-grow opacity-50"></div>
      </div>
      <div className="mb-10">
        <img src={ethereum} alt="Ether" className="mt-4 mb-6" />
        <h4 className="font-medium text-2xl mb-6">Buy some Ethereum</h4>
        <p className="text-lg text-balance lg:w-[80%] mb-6 text-[#A0A0A0]">
          If you made a new account, buy some Ethereum. The MetaMask plugin has
          a button that will allow you to buy Ether from Coinbase.
        </p>
      </div>
    </div>
  );
};

const NumberThree = () => {
  return (
    <div className="flex gap-x-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-white border mb-6">
          3
        </div>
      </div>
      <div className="mb-10">
        <h4 className="font-medium text-2xl mb-6">
          Start bidding, buying and selling
        </h4>
        <p className="text-lg text-balance lg:w-[80%] mb-6 text-[#A0A0A0]">
          Once you have the plugin installed, this website will recognise it and
          add buttons that allow you to bid on, buy and sell punks directly in
          the interface.
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
