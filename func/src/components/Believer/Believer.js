import React from "react";
import "./Believer.css";
import believer1 from "../../assets/believer-1.png";
import believer2 from "../../assets/believer-2.png";
import believer3 from "../../assets/believer-3.png";
import arrow from "../../assets/Arrow.png";


const Believer = () => {
  return (
    <div className="bg-believer pb-16">
      <h1 className="text-center believer-title pb-6">Early believers</h1>

      <div className="flex justify-center mx-8">
        <div className="flex gap-8 items-center flex-col-reverse lg:flex-row">
          <div>
            <img src={believer1} alt="" />
          </div>
          <div>
            <img src={believer2} alt="" />
          </div>
          <div>
            <img src={believer3} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Believer;
