import React from "react";
import "./WorkWith.css";
import work1 from "../../../assets/work-1.png";
import work2 from "../../../assets/work-2.png";
import work3 from "../../../assets/work-3.png";
import work4 from "../../../assets/work-4.png";
import work5 from "../../../assets/work-5.png";
import work6 from "../../../assets/work-6.png";
import work7 from "../../../assets/work-7.png";
import work8 from "../../../assets/work-8.png";
import work9 from "../../../assets/work-9.png";
import work10 from "../../../assets/work-10.png";
import work11 from "../../../assets/work-11.png";
import work12 from "../../../assets/work-12.png";
import work13 from "../../../assets/work-13.png";
import work14 from "../../../assets/work-14.png";
import work15 from "../../../assets/work-15.png";
import work16 from "../../../assets/work-16.png";
import work17 from "../../../assets/work-17.png";
import work18 from "../../../assets/work-18.png";
import work19 from "../../../assets/work-19.png";

const WorkWith = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center work-with-title">Worked with</h1>

      <div className="flex justify-center mx-8 mt-8">
        <div className="flex lg:gap-32 gap-8 items-center flex-col lg:flex-row">
          <div>
            <img src={work1} alt="" className="w-32" />
          </div>
          <div>
            <img src={work2} alt="" className="w-32" />
          </div>
          <div>
            <img src={work3} alt="" className="w-32" />
          </div>
          <div>
            <img src={work4} alt="" className="w-32" />
          </div>
          <div>
            <img src={work5} alt="" className="w-32" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mx-8 mt-8">
        <div className="flex lg:gap-32 gap-8 items-center flex-col lg:flex-row">
          <div>
            <img src={work6} alt="" className="w-32" />
          </div>
          <div>
            <img src={work7} alt="" className="w-32" />
          </div>
          <div>
            <img src={work8} alt="" className="w-32" />
          </div>
          <div>
            <img src={work9} alt="" className="w-32" />
          </div>
          <div>
            <img src={work10} alt="" className="w-32" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mx-8 mt-8">
        <div className="flex lg:gap-24 gap-8 items-center flex-col lg:flex-row">
          <div>
            <img src={work11} alt="" className="w-32" />
          </div>
          <div>
            <img src={work12} alt="" className="w-32" />
          </div>
          <div>
            <img src={work13} alt="" className="w-32" />
          </div>
          <div>
            <img src={work14} alt="" className="w-32" />
          </div>
          <div>
            <img src={work15} alt="" className="w-32" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mx-8 mt-8 pb-16">
        <div className="flex lg:gap-24 gap-8 items-center flex-col lg:flex-row">
          <div>
            <img src={work16} alt="" className="w-32" />
          </div>
          <div>
            <img src={work17} alt="" className="w-32" />
          </div>
          <div>
            <img src={work18} alt="" className="w-32" />
          </div>
          <div>
            <img src={work19} alt="" className="w-32" />
          </div>
        </div>
      </div>

      <p className="text-center text-[#000000] text-2xl font-semibold">
        Connect with me for speaking engagements or health,
        <br /> entrepreneurship and innovation projects.
      </p>

      <div className="flex justify-center mt-10 pb-16">
        <button className="fill-btn ">FILL THE FORM</button>
      </div>
    </div>
  );
};

export default WorkWith;
