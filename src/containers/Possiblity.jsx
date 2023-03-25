import React from "react";
import possibilityImage from "./../assets/possibility.png";

const Possiblity = () => {
  return (
    <div
      className="section-padding pt-5 flex flex-col lg:flex-row"
      id="caseStudies"
    >
      <div className="flex flex-1 justify-start items-center mr-8">
        <img
          className="w-full h-full"
          src={possibilityImage}
          alt="possibilityImage"
        />
      </div>
      <div className="flex flex-col mt-10 lg:mt-0 flex-1 gap-3 lg:gap-5 justify-center items-start">
        <p className="text-[#71E5FF]">Request Early Access to Get Started</p>
        <h1 className="heading">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-color-text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="text-color-subtext ">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
};

export default Possiblity;
