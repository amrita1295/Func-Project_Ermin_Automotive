import React from "react";
import './RishiSocial.css';
import social1 from '../../../assets/rishi-insta.png'
import social2 from '../../../assets/rishi-facebook.png'
import social3 from '../../../assets/rishi-twitter.png'
import social4 from '../../../assets/rishi-linkedin.png'

const RishiSocial = () => {
  return (
    <div className="pb-20">
      <div className="hero-3 bg-[#20284E] text-white" >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-xl font-bold">Find rishi on</h1>
            <div className="flex w-12 justify-center mx-auto gap-10 lg:flex-row flex-col mt-9 pb-12">
                <img src={social1} alt="" className=""/>
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RishiSocial;
