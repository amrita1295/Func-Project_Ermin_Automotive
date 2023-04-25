import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ArticleDetails.css";
import arrow from '../../../assets/Arrow.png'
const ArticleDetials = () => {
  const article = useLoaderData();

  return (
    <div className="pt-24 bg-[#FBF8F0] pb-12">
      <div className="mx-auto w-3/4">
        <img src={article.img2} alt="" />

        <div tabIndex={0} className="collapse collapse-open bg-[#FBF8F0] mt-8 ">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]"> {article.header}</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
                {article.desc}
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8 ">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]"> {article.header1}</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
                {article.desc1}
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8 ">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]"> {article.header2}</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
                {article.desc2}
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8 ">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]"> {article.header3}</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
                {article.desc3}
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8 ">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]"> {article.header4}</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
                {article.desc4}
            </p>
          </div>
        </div>


        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8 ">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]"> {article.header5}</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
                {article.desc5}
            </p>
          </div>
        </div>
      </div>


      <div className="flex justify-center mt-8">
        <img src={arrow} alt="" />
      </div>

    </div>
  );
};

export default ArticleDetials;
