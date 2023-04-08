import React from "react";
import "./Healthy.css";
import dot from "../../../assets/healthy-dot.png";
import run from "../../../assets/healthy-1.png";
const Healthy = () => {
  return (
    <div className="bg-healthy pb-16">
      <div className="flex justify-start">
        <img src={dot} alt="" className="w-20" />
      </div>

      <div className="hero bg-healthy-2 width mx-auto border-rad-healthy text-white">
        <div className="hero-content flex-col lg:flex-row p-0">
          <img alt="" src={run} className=" w-96 mt-[-80px]" />
          <div className="text-justify ">
            <h1 className="text-sm px-12 mb-2">WE HELP YOU STAY HEALTHY</h1>
            <h1 className="lg:text-4xl text-3xl font-bold px-12 mb-8">You should know</h1>

            <p className="px-12">
              Many times we see the effect but fail to see the cause. We see
              poor performance, injury, lethargy, weakness and loss of focus but
              fail to understand what caused the same. In our conquest to
              understand the cause and effect in the last two decades, we
              understood a simple solution to the most complex and vexing
              problem of losing vitality. Striving for development, we lost
              connection with nature, which has nurtured us for a million years.
              We started developing hi-tech gadgets and products to improve our
              fitness level but failed to notice a few fundamentals that we were
              born with. We are moving far away from reality in pursuit of ease
              and luxury.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <img src={dot} alt="" className="w-20" />
      </div>
    </div>
  );
};

export default Healthy;
