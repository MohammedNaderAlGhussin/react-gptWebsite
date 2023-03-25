import React from "react";

const Feature = ({ title, text }) => {
  return (
    <div className="flex gap-3 md:gap-10 md:items-center flex-col md:flex-row m-4">
      <div className="min-w-[180px] mr-8">
        <div className="w-[38px] h-[4px] bg-gradient-text mb-1"></div>
        <h1 className="bg-gradient-text bg-clip-text text-transparent font-extrabold text-[18px] leading-[24px] tracking-tighter text-white ">
          {title}
        </h1>
      </div>
      <div className="flex text-color-text mb-5">
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
