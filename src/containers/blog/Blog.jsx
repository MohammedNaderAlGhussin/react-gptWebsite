import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="section-padding flex flex-col " id="library">
      <div className="w-full text-left mb-[80px]">
        <h1 className="heading text-[34px] leading-[42px] md:text-[46] md:leading-[52px] lg:text-[62px] lg:leading-[75px] font-extrabold">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="flex  flex-col-reverse xl:flex-row">
        <div className="flex-1 m-8 lg:m-0 lg:mr-8">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
