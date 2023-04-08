import React from "react";
import "./Func.css";
import func1 from "../../assets/func.png";
const Func = () => {
  return (
    <div className="bg-func lg:pt-40 md:pt-40 pt-10">
      <h1 className="text-center func-title lg:pb-0 md:pb-0 pb-5">
        What is <span className="func-title-color">FUNc</span>?
      </h1>

      <div className="hero-2">
        <div className="hero-content-2 flex-col lg:flex-row">
          <div className="">
            <h1 className="func-title-heading lg:mx-8 md:mx-8 mx-4 mb-6">
              <span className="func-title-color ">FUNc </span>is a health-tech solution to  improve joint health and overall fitness.
            </h1>
            <p className="lg:mx-8 md:mx-8 mx-4 text-justify">
              It is designed by leading orthopaedics, physiotherapist and
              fitness experts, ensuring that our programs are safe, effective,
              and based on the latest research in functional fitness. Our
              signature FUNc dumbbells are safe, convenient, and effective for
              achieving your fitness goals.
            </p>
          </div>
          <div className="mx-6 lg:mx-0 md:mx-0 max-w-sm lg:max-w-2xl md:max-w-lg">
            <img src={func1} alt="" className="func-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Func;
