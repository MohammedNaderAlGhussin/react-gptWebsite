import React from "react";

const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="w-full h-full">
      <div className=" bg-color-bg">
        <img className="w-full h-full" src={imgUrl} alt="" />
      </div>
      <div className="flex flex-col justify-between py-4 px-6 ">
        <div>
          <p className="text-[12px] font-bold leading-[35px] text-white">
            {date}
          </p>
          <h3 className=" text-[18px] leading-[25px] md:text-[22px] md:leading-[27px] font-extrabold mb-[80px] cursor-pointer text-white ">
            {text}
          </h3>
        </div>
        <p className="cursor-pointer text-white">Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
