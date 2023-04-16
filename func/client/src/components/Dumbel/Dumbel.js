import React from "react";
import dumbel from '../../assets/dumbel-2.png'
import './Dumbel.css'
const Dumbel = () => {
  return (
    <div className="bg-dumbel pt-20">
      <div className="hero-2 max-w-6xl">
        <div className=" hero-content-2 flex-col lg:flex-row-reverse">
          <div className="">
            <h1 className="func-title-heading lg:mx-8 md:mx-8 mx-4 mb-6 text-right font-bold">
              <span className="func-title-color ">FUNc <br /></span> Dumbbells
            </h1>
          </div>
          <div className="mx-6 lg:mx-0 md:mx-0 max-w-sm lg:max-w-2xl md:max-w-lg">
            <img src={dumbel} alt="" className="func-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dumbel;
