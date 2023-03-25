import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="p-sm-sec-padding md:p-md-sec-padding lg:p-sec-padding justify-center items-center flex flex-row flex-wrap">
      <div className="flex flex-row justify-center items-center max-w-[150px] min-w-[120px] flex-1 m-4 ">
        <img src={google} alt="" />
      </div>
      <div className="flex flex-row justify-center items-center max-w-[150px] min-w-[120px] flex-1 m-4 ">
        <img src={slack} alt="" />
      </div>
      <div className="flex flex-row justify-center items-center max-w-[150px] min-w-[120px] flex-1 m-4 ">
        <img src={atlassian} alt="" />
      </div>
      <div className="flex flex-row justify-center items-center max-w-[150px] min-w-[120px] flex-1 m-4 ">
        <img src={dropbox} alt="" />
      </div>
      <div className="flex flex-row justify-center items-center max-w-[150px] min-w-[120px] flex-1 m-4 ">
        <img src={shopify} alt="" />
      </div>
    </div>
  );
};

export default Brand;
