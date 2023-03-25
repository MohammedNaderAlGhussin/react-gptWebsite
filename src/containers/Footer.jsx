import React from "react";
import gpt3Logo from "./../assets/logo.svg";

const Footer = () => {
  return (
    <div className="section-padding bg-color-footer flex flex-col items-center justify-center">
      <h1 className="heading text-[27px] leading-[38px] md:text-[34px] md:leading-[42px] lg:text-[44px] lg:leading-[50px]  xl:text-[62px] xl:leading-[75px] mb-[48px] text-center">
        Do you want to step in to the
        <br className="hidden md:block" /> future before others
      </h1>
      <p className=" border-2 mb-[160px] cursor-pointer text-[18px] tracking-[2px] text-center border-white p-4 w-fit text-white">
        Request Early Access
      </p>
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center lg:items-start justify-between w-full flex-wrap ">
        <div className="flex flex-col items-start justify-start flex-1">
          <img src={gpt3Logo} alt="logo" className="w-[118px] h-[30px] mb-4" />
          <p className="text-white text-[13px] leading-[17px]">
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="text-white gap-10 lg:gap-0 flex flex-col items-center lg:items-start  lg:flex-row flex-wrap justify-between flex-1">
          <div className="mr-10">
            <h1 className="text-[16px] leading-[18px] mb-8 font-bold ">
              Links
            </h1>
            <div className="">
              <p className="text-[13px] leading-[15px] mb-4 cursor-pointer">
                Overons
              </p>
              <p className="text-[13px] leading-[15px] mb-4 cursor-pointer">
                Social Media
              </p>
              <p className="text-[13px] leading-[15px] mb-4 cursor-pointer">
                Counters
              </p>
              <p className="text-[13px] leading-[15px] mb-4 cursor-pointer">
                Contact
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="text-[16px] leading-[18px] mb-8 font-bold">
              Company
            </h1>
            <div className="">
              <p className="text-[13px] leading-[15px] mb-4 cursor-pointer">
                Terms & Conditions
              </p>
              <p className="text-[13px] leading-[15px] mb-4 cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-[13px] leading-[15px] mb-4 cursor-pointer">
                Contact
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="text-[16px] leading-[18px] mb-8 font-bold">
              Get in touch
            </h1>
            <div className="">
              <p className="text-[13px] leading-[15px] mb-4 cursor-pointer">
                Crechterwoord K12
                <br /> 182 DK Alknjkcb
              </p>
              <p className="text-[13px] leading-[15px] mb-4 cursor-pointer">
                085-132567
              </p>
              <p className="text-[13px] leading-[15px] mb-4 cursor-pointer">
                info@payme.net
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-[13px] text-white leading-[15px] ">
        © 2021 GPT-3. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
