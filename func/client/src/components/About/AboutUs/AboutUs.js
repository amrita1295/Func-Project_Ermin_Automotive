import React from "react";
import "./AboutUs.css";
import dot from "../../../assets/about-dot-1.png";
import dot1 from "../../../assets/about-dot-2.png";

import about1 from "../../../assets/about-bg.png";
const AboutUs = () => {
  return (
    <div className="bg-aboutUs pt-16">
      <div className="flex justify-start">
        <img src={dot} alt="" className="w-20" />
      </div>

      <h1 className="text-center aboutUs-title mt-[-40px]">About us</h1>
      <div className="flex justify-center">
        <p className="text-center lg:px-96 md:px-52 px-8 about-para mt-4 mb-8">
          Being healthy should be the norm. We are on a mission to help build
          sustainable healthy habits for kids and adults by focusing on
          movement, nutrition and recovery.
        </p>
      </div>

      <div className="flex justify-end">
        <img src={dot1} alt="" className="w-20 mt-[-80px]" />
      </div>

      <div>
        <img src={about1} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
