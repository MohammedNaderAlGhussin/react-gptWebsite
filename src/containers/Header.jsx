import React from "react";
import people from "./../assets/people.png";
import ai from "./../assets/ai.png";

const Header = () => {
  return (
    <div className="section-padding flex flex-col lg:flex-row" id="home">
      <div className="container  mb-[30px]">
        <h1 className=" bg-gradient-text bg-clip-text text-transparent font-extrabold text-[28px] sm:text-[36px] sm:leading-[48px] md:text-[48px] md:leading-[60px] lg:text-[62px] lg:leading-[75px] tracking-tighter">
          Let's Build Something amazing with GPT-3 Open AI
        </h1>
        <p className="font-normal text-[16px] md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[28px] text-color-text mt-5">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="flex flex-row items-center w-[90%]  sm:w-[80%] mt-[30px] ml-4 ">
          <input
            className="flex-1 focus:outline-none rounded-bl-[5px] rounded-tl-[5px]  pl-4 text-[15px] md:text-[18px] lg:text-[20px] lg:leading-[28px] min-h-[60px] bg-[#052D56] text-[#3D6184]"
            type="text"
            placeholder="Your Email Adress"
          />
          <button
            className=" block bg-[#ff4820] px-2 sm:px-3 text-white min-h-[60px] rounded-br-[5px] rounded-tr-[5px] text-[13px] md:text-[15px] lg:text-[20px] lg:leading-[28px]"
            type="button"
          >
            Get Started
          </button>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:justify-start items-center mt-[32px] ">
          <img src={people} alt="people" />
          <p className="text-white lg:ml-4 text-center mt-3 lg:mt-0">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center lg:w-[65%] xl:w-[95%]">
        <img className="w-full h-full" src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
