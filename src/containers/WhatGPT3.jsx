import React from "react";
import { Feature } from "../components";

const WhatGPT3 = () => {
  return (
    <div
      id="wig"
      className="m-sm-margin-padding md:m-md-sec-padding lg:m-sec-padding p-[32px] gpt3__whatgpt3 "
    >
      <div className="">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center">
        <h1 className="heading">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-color-subtext min-w-[140px]">Explore The Library</p>
      </div>
      <div className="flex flex-row flex-wrap mt-8 items-center">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
