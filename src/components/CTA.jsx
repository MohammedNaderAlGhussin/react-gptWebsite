import React from "react";

const CTA = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center m-[64px] p-8 bg-gradient-bar rounded-[15px]">
      <div className="">
        <p className="text-[14px] lg:text-[18px]">
          Request Early Access to Get Started
        </p>
        <h1 className="text-[18px] leading-[32px] md:text-[24px] md:leading-[45px] font-bold">
          Register today & start exploring the endless possiblities.
        </h1>
      </div>
      <div className="flex justify-center items-center font-bold   bg-black rounded-[40px] mt-4 lg:mt-0 py-2 px-4">
        <button className="text-white" type="">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
