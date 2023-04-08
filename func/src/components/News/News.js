import React from "react";
import "./News.css";
import news1 from "../../assets/news-1.png";
import news2 from "../../assets/news-2.png";
import news3 from "../../assets/news-3.png";
import arrow from "../../assets/Arrow.png";
import dot from "../../assets/dot.png";

const News = () => {
  return (
    <div className="bg-news pb-20">
      <h1 className="text-center news-title pb-6">We are on news</h1>

      <div className="flex justify-center mx-10 mt-8">
        <div className="flex gap-24 items-center flex-col lg:flex-row md:flex-row">
          <div className="text-center">
            <img src={news1} alt="" className="w-40 mx-auto"/>
            <p className="lg:mt-16 md:mt-10 mt-5">
              Lorem ipsum dolor sit amet consectetur. Sit euismod libero dapibus
              eu amet ultrices etiam euismod. Quam et id facilisis lectus
              adipiscing.{" "}
            </p>
          </div>
          <div className="text-center">
            <img src={news2} alt=""  className="w-40 mx-auto"/>
            <p className="lg:mt-16 md:mt-10 mt-5">
              Lorem ipsum dolor sit amet consectetur. Sit euismod libero dapibus
              eu amet ultrices etiam euismod. Quam et id facilisis lectus
              adipiscing.{" "}
            </p>
          </div>
          <div className="text-center">
            <img src={news3} alt=""  className="w-40 mx-auto"/>
            <p className="lg:mt-16 md:mt-10 mt-5">
              Lorem ipsum dolor sit amet consectetur. Sit euismod libero dapibus
              eu amet ultrices etiam euismod. Quam et id facilisis lectus
              adipiscing.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <img src={arrow} alt="" />
      </div>

      <div className="ml-10">
        <img src={dot} alt="" />
      </div>

    </div>
  );
};

export default News;
